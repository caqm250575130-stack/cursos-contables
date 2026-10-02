# Antonio's Solutions · Academia Contable

## Paquete para GitHub + Vercel

Este proyecto separa el código público de los secretos. Las contraseñas NO están en `src/app.js`, HTML ni en el repositorio.

### Lo que SÍ se sube a GitHub
- `index.html`
- `src/`
- `api/`
- `lib/`
- `vercel.json`
- `.env.example`
- `.gitignore`
- `package.json`

### Lo que NO se sube a GitHub
- `.env.local`
- `LOCAL-NO-SUBIR/`
- `local-server.js`
- `INICIAR-LOCAL.bat`
- `README-LOCAL.txt`

La exclusión está reforzada por `.gitignore`.

## Vercel
1. Sube solamente el contenido público a GitHub.
2. Importa el repositorio en Vercel.
3. En Vercel → Settings → Environment Variables, crea `ADMIN_PASSWORD`, `PRO_PASSWORD`, `PRO_PASSWORD_1` a `PRO_PASSWORD_6` y `SESSION_SECRET`.
4. Después de cambiar variables, haz un nuevo deploy.

## Local
El paquete completo incluye un servidor local privado para que el login seguro funcione también en tu PC. Usa `INICIAR-LOCAL.bat`.

## Videos
El paquete contiene los 3 videos que estaban disponibles en los archivos entregados: `curso-09-ecuacion-contable.mp4`, `curso-10-cuenta-t.mp4` y `curso-11-error-pvp.mp4`. Otros cursos del catálogo hacen referencia a videos que no estaban disponibles en los archivos recibidos; sus nombres se conservan para no alterar el catálogo, pero esos MP4 deben agregarse cuando estén disponibles.

## Nota de seguridad
Las contraseñas ya aparecieron durante la conversación; para producción conviene rotarlas antes de usar el sitio públicamente.


LOGO
El sitio usa el logo oficial proporcionado: src/assets/antonio-solutions-logo.png.
