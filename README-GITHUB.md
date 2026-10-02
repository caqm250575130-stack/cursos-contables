# Antonio's Solutions · Academia Contable

## Paquete final para GitHub + Vercel

Esta versión conecta el frontend con funciones serverless de Vercel para que las contraseñas no estén dentro de `src/app.js`.

### Estructura

- `index.html`
- `src/app.js`
- `src/styles.css`
- `src/assets/antonio-solutions-logo.png`
- `src/videos/`
- `api/auth/login.js`
- `api/auth/logout.js`
- `api/auth/session.js`
- `lib/auth.js`
- `vercel.json`
- `.env.example`
- `.gitignore`
- `package.json`

### Subir a GitHub

Sube el contenido de este ZIP al repositorio. No agregues archivos de `.env.local`, contraseñas reales ni carpetas privadas locales.

### Variables de Vercel

En **Vercel → Project → Settings → Environment Variables**, crea estas variables como **Secret** y asegúrate de seleccionar **Production** (y Preview/Development si también las necesitas allí):

```text
ADMIN_PASSWORD
PRO_PASSWORD
PRO_PASSWORD_1
PRO_PASSWORD_2
PRO_PASSWORD_3
PRO_PASSWORD_4
PRO_PASSWORD_5
PRO_PASSWORD_6
SESSION_SECRET
```

Los valores reales no están incluidos en este ZIP.

`SESSION_SECRET` debe ser una cadena aleatoria de al menos 32 caracteres. Puedes generar una desde tu PC con:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"
```

### Después de guardar las variables

Haz un nuevo **Deploy/Redeploy** de la rama que usa Vercel. Si cambias variables de Production, verifica que el deployment que estás probando también sea de Production.

### Comprobación rápida

Con el sitio desplegado:

- `/api/auth/session` sin iniciar sesión debe responder `401`.
- El login Admin usa `POST /api/auth/login` con `scope: "admin"`.
- El login PRO usa `POST /api/auth/login` con `scope: "pro"`.
- La contraseña Admin también puede desbloquear PRO, pero la sesión resultante es de rol `pro` y no concede acceso al panel Admin.

### Seguridad

Las contraseñas no deben escribirse en HTML, CSS, JavaScript del navegador, README ni GitHub. Si una contraseña real ya fue compartida o subida a un repositorio, conviene rotarla antes de producción.

### Videos

Este paquete conserva los tres MP4 que estaban disponibles en los archivos entregados. Los cursos cuyo MP4 todavía no estaba disponible mantienen su nombre de archivo en el catálogo para no alterar el contenido.
