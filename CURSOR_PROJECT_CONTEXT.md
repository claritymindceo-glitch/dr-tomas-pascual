# Dr. Tomás Pascual — Sitio web

- **Ruta:** `/Users/dario/Desktop/Proyectos Cursor/DR TOMAS PASCUAL V2/remix_-pagina-dr-pascual`
- **Creado contexto:** 2026-05-29
- **Última actualización:** 2026-05-29

## Resumen

Sitio SPA del Dr. Tomás Agustín Pascual (diagnóstico por imágenes / trauma deportivo). Express + Vite en modo middleware; asistente con Gemini/Anthropic.

## Stack y comandos

| Item | Valor |
|------|--------|
| Runtime | Node.js, `tsx` en dev |
| Frontend | React 19, Vite 6, Tailwind 4 |
| Backend | Express (`server.ts`) |
| Dev URL | http://localhost:5050 |
| Puerto dev | **5050** (`PORT` en env o default en `server.ts`) |

```bash
npm install
npm run dev    # PORT=5050 → http://localhost:5050
npm run build
npm start      # producción (dist/)
```

## Variables de entorno (nombres)

- `GEMINI_API_KEY` — API Gemini (consultas `/api/consult`, fallback)
- `ANTHROPIC_API_KEY` — proxy `/v1/messages` (opcional)
- `PORT` — puerto del servidor (default 5050)
- `NODE_ENV` — `production` sirve estáticos desde `dist/`
- `DISABLE_HMR` — desactiva HMR en Vite si es `true`

## Arquitectura

- `server.ts` — Express, APIs, Vite middleware en dev
- `src/App.tsx` — shell horizontal por secciones
- `src/components/sections/` — espacios (Inicio, Enfoque, etc.)
- `src/data.ts` — datos estáticos (papers, sedes, guías)

## Paleta de colores — Opción C dual (actualizada 2026-05-29)

**Heroes oscuros + contenido gris perla.** Más perla que crema; transmite confianza clínica sin perder impacto visual.

| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| Fondo perla base | Pearl | `#f0eeea` | Body, shell, secciones principales |
| Fondo perla alt | Pearl dark | `#e8e6e1` | Footer, bloques alternados, social proof |
| Superficie cards | Blanco | `#ffffff` | Tarjetas, paneles, chat widget |
| Superficie sutil | Pearl input | `#f7f6f3` | Inputs, hovers, header chat |
| Texto primario | Carbón cálido | `#1a1a18` | Headings, nav activo |
| Texto secundario | Gris cálido | `#2c2a26` / `#5c5954` | Subtítulos, body |
| Texto caption | Gris medio | `#7a7670` | Micro-labels |
| Acento clínico | Steel teal | `#4a8499` | Nav, CTAs, íconos, bordes activos |
| Acento prestigio | Gold | `#9a7b2e` | Stats RSNA, premios, credenciales |
| Hero / banners | Negro + overlay | `#0c0c0b` | Solo slider Inicio + `SectionHeaderBanner` |

**Lógica:** Perla = humanidad y confianza médica. Teal = competencia clínica. Oro = distinción académica. Oscuro reservado solo a heroes con foto.

**CSS:** `.neon-relief-card` = sombra suave blanca; gold override en `index.css` apunta a `#9a7b2e` sobre fondos claros.

## Infraestructura (ClarityMind)

| Servicio | ID / URL | Cuenta |
|----------|----------|--------|
| **Firebase** | `dr-tomas-pascual` · [Console](https://console.firebase.google.com/project/dr-tomas-pascual) | claritymind.ceo@gmail.com |
| **Firestore** | DB `(default)`, región `nam5` · `firestore.rules` | mismo proyecto |
| **GitHub** | [claritymindceo-glitch/dr-tomas-pascual](https://github.com/claritymindceo-glitch/dr-tomas-pascual) | claritymindceo-glitch |
| **Vercel** | `dr-tomas-pascual` · team `claritymindceo-9119s-projects` · `prj_58URVDusdqfMjJaP8ebSDQ2uJbaP` | claritymindceo-9119 |

- **Prod:** https://dr-tomas-pascual.vercel.app
- **APIs serverless:** `api/consult.ts`, `api/v1/messages.ts` (Gemini + fallback Anthropic)
- **Último deploy:** 2026-05-29 (V2 perla/teal)

## Deuda / notas

- Carpeta del repo se llama `remix_-pagina-dr-pascual` pero el stack es Vite+Express, no Remix.
- Los tokens `@theme` existen pero los componentes usan hex inline. Migrar a tokens Tailwind mejoraría mantenibilidad.
- En Vercel producción deben existir `GEMINI_API_KEY` (y opcional `ANTHROPIC_API_KEY`).
