const {
  createSession,
  setSessionCookie,
  checkRateLimit,
  expectedPassword,
  timingSafeStringEqual
} = require('../../lib/auth');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Método no permitido.' });
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  const scope = body.scope === 'admin' || body.scope === 'pro' ? body.scope : null;
  const password = typeof body.password === 'string' ? body.password : '';
  if (!scope || !password || password.length > 256) {
    return res.status(400).json({ message: 'Solicitud de acceso inválida.' });
  }

  const limit = checkRateLimit(req, scope);
  if (!limit.allowed) {
    res.setHeader('Retry-After', String(limit.retryAfter));
    return res.status(429).json({ message: 'Demasiados intentos. Espera unos minutos y vuelve a intentarlo.' });
  }

  const configuredPasswords = expectedPassword(scope);
  const passwords = Array.isArray(configuredPasswords) ? configuredPasswords : [configuredPasswords];
  if (!passwords.some(Boolean)) {
    return res.status(503).json({ message: 'El acceso seguro todavía no está configurado en Vercel.' });
  }

  if (!passwords.filter(Boolean).some(candidate => timingSafeStringEqual(password, candidate))) {
    return res.status(401).json({ message: 'Contraseña incorrecta.' });
  }

  try {
    const token = createSession(scope);
    setSessionCookie(res, req, token);
    return res.status(200).json({ ok: true, role: scope, expiresIn: 3600 });
  } catch (error) {
    console.error('Authentication configuration error:', error.message);
    return res.status(500).json({ message: 'No se pudo crear la sesión segura.' });
  }
};
