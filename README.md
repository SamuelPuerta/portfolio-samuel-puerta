# Samuel Puerta Patiño — Portafolio

## RAMA CREADA PARA VERSIONAR EL DESPLIEGUE EN AZURE STATIC WEB APPS

Sitio de portafolio construido con Next.js (App Router) + TypeScript + Tailwind CSS,
pensado para desplegarse en Vercel con el flujo del Laboratorio 1 de Cloud Computing (UdeA).

Perfil de Desarrollador Backend & QA — Auxiliar de Programación en la SIU–UdeA.

## Estructura

```
src/
  app/
    layout.tsx      # fuentes (self-hosted vía @fontsource) y metadata
    page.tsx         # ensambla las secciones
    globals.css      # tokens de color/tipografía (tema "terminal")
  components/         # Sidebar, Hero, About, Experience, AppliedProject, Projects, StackBars, Education, Contact
  lib/
    data.ts           # contenido editable: proyectos, stack, experiencia, educación, proyecto aplicado
```

Para actualizar contenido (agregar un proyecto, cambiar el stack, etc.) solo edita
`src/lib/data.ts` — los componentes se re-renderizan automáticamente.

## Foto de perfil

El sitio busca automáticamente `public/profile.jpeg`. Mientras no exista, se
muestra un placeholder acorde a la estética (verde/morado sobre negro), tanto
en el hero como en la miniatura del sidebar — no hace falta tocar código.

1. Copia tu foto (idealmente cuadrada, 800×800px o más) a `public/profile.jpeg`.
2. Recarga la página — la foto reemplaza el placeholder automáticamente.

## CV descargable

El botón «descargar cv ↓» apunta a `public/cv.pdf`. Coloca tu CV en esa ruta
para que el enlace funcione (el archivo no está versionado por convención).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Despliegue en Vercel (según el laboratorio)

### Opción 1 — Repositorio existente

1. Sube este proyecto a un repo en tu GitHub:
   ```bash
   git init
   git add .
   git commit -m "init: portfolio"
   git branch -M main
   git remote add origin https://github.com/SamuelPuerta/<nombre-del-repo>.git
   git push -u origin main
   ```
2. En Vercel → **New Project** → importa el repo.
3. Framework detectado automáticamente: **Next.js**.
4. **Deploy**. Obtendrás una URL `https://<app>.vercel.app`.

### Validación

- La URL pública abre el home.
- Un nuevo commit en `main` dispara un redeploy automático.
- (Opcional) Conecta un dominio propio en Vercel → Project → Settings → Domains.

## Notas de diseño

El sitio usa una identidad visual de "ventana de terminal / monitor de sistema",
en referencia directa al proyecto real `System-Operative-Monitor-Bash`: cada
sección es un panel con barra de título (estilo tmux/iTerm), el stack técnico
se muestra como barras de un monitor de recursos, y los proyectos se listan
como procesos en ejecución (`ps aux`). Colores y contenido están en
`src/app/globals.css` y `src/lib/data.ts` respectivamente.
