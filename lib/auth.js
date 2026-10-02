const crypto = require('crypto');

const SESSION_TTL_SECONDS = 60 * 60;
const MAX_ATTEMPTS = 8;
const WINDOW_MS = 15 * 60 * 1000;
const attempts = new Map();

function base64url(value) {
  return Buffer.from(value).toString('base64url');
}

function unbase64url(value) {
  return Buffer.from(value, 'base64url').toString('utf8');
}

function timingSafeStringEqual(a, b) {
  const left = Buffer.from(String(a || ''));
  const right = Buffer.from(String(b || ''));
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

function getSecret() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error('SESSION_SECRET must contain at least 32 characters.');
  }
  return secret;
}

function sign(value) {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('base64url');
}

function createSession(role) {
  const payload = base64url(JSON.stringify({
    role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  }));
  return `${payload}.${sign(payload)}`;
}

function verifySession(token) {
  if (!token || !token.includes('.')) return null;
  const [payload, signature] = token.split('.');
  const expected = sign(payload);
  if (!timingSafeStringEqual(signature, expected)) return null;
  try {
    const data = JSON.parse(unbase64url(payload));
    if (!data || !['admin', 'pro'].includes(data.role)) return null;
    if (!Number.isInteger(data.exp) || data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch {
    return null;
  }
}

function cookieName(req) {
  const production = process.env.VERCEL_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https';
  return production ? '__Host-antonio_session' : 'antonio_session';
}

function cookieSecure(req) {
  return process.env.VERCEL_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https';
}

function parseCookies(req) {
  const raw = req.headers.cookie || '';
  return raw.split(';').reduce((cookies, part) => {
    const index = part.indexOf('=');
    if (index === -1) return cookies;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    cookies[key] = decodeURIComponent(value);
    return cookies;
  }, {});
}

function setSessionCookie(res, req, token) {
  const secure = cookieSecure(req) ? '; Secure' : '';
  const name = cookieName(req);
  res.setHeader('Set-Cookie', `${name}=${encodeURIComponent(token)}; Max-Age=${SESSION_TTL_SECONDS}; Path=/; HttpOnly; SameSite=Strict${secure}`);
}

function clearSessionCookie(res, req) {
  const secure = cookieSecure(req) ? '; Secure' : '';
  const name = cookieName(req);
  res.setHeader('Set-Cookie', `${name}=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict${secure}`);
}

function getSession(req) {
  const cookies = parseCookies(req);
  return verifySession(cookies[cookieName(req)]);
}

function getClientIp(req) {
  const forwarded = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return forwarded || req.socket?.remoteAddress || 'unknown';
}

function rateLimitKey(req, scope) {
  return `${scope}:${getClientIp(req)}`;
}

function checkRateLimit(req, scope) {
  const key = rateLimitKey(req, scope);
  const now = Date.now();
  let item = attempts.get(key);
  if (!item || item.resetAt <= now) {
    item = { count: 0, resetAt: now + WINDOW_MS };
    attempts.set(key, item);
  }
  item.count += 1;
  if (item.count > MAX_ATTEMPTS) {
    return { allowed: false, retryAfter: Math.ceil((item.resetAt - now) / 1000) };
  }
  return { allowed: true, retryAfter: 0 };
}

function expectedPassword(scope) {
  if (scope === 'admin') return process.env.ADMIN_PASSWORD;
  // La contraseña de administrador también permite desbloquear contenido PRO.
  // La sesión creada sigue siendo de alcance PRO, por lo que no concede acceso al panel administrativo.
  return [process.env.PRO_PASSWORD, ...Array.from({length: 6}, (_, i) => process.env[`PRO_PASSWORD_${i + 1}`]), process.env.ADMIN_PASSWORD].filter(Boolean);
}

module.exports = {
  SESSION_TTL_SECONDS,
  timingSafeStringEqual,
  createSession,
  verifySession,
  setSessionCookie,
  clearSessionCookie,
  getSession,
  checkRateLimit,
  expectedPassword
};
