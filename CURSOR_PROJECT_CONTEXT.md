# Dr. Tomás Pascual — Sitio web

- **Ruta:** `/Users/dario/Desktop/Proyectos Cursor/DR TOMAS PASCUAL V2/remix_-pagina-dr-pascual`
- **Creado contexto:** 2026-05-29
- **Última actualización:** 2026-05-31

## Resumen

Sitio SPA del Dr. Tomás Agustín Pascual (diagnóstico por imágenes / trauma deportivo). Express + Vite en modo middleware; asistente con OpenAI. **i18n:** español (Argentina), inglés y portugués con selector en el header (`src/i18n/`).

## Internacionalización

| Locale | Código | Persistencia |
|--------|--------|--------------|
| Español (Argentina) | `es-AR` | `localStorage` key `dr-pascual-locale` |
| English | `en` | idem |
| Português | `pt` | idem |

- Provider: `src/i18n/context.tsx` — hook `useI18n()` → `{ locale, setLocale, m }`
- Traducciones: `src/i18n/messages/{es-AR,en,pt}.ts`
- Selector: `src/i18n/LanguageSelector.tsx` (header, junto a «Consultar»)
- Al cambiar idioma: se reinician mensajes del chat flotante, consola asistente y logs CRM; `document.documentElement.lang` se actualiza
- API `/api/consult` recibe `locale` en el body para respuestas del asistente en el idioma elegido

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

- `OPENAI_API_KEY` — asistente clínico (`/api/consult`, `/v1/messages`)
- `OPENAI_MODEL` — opcional (default `gpt-4o-mini`)
- `SMTP_HOST` — default `smtp.gmail.com`
- `SMTP_PORT` — default `587`
- `SMTP_USER` — default `claritymind.ceo@gmail.com`
- `SMTP_PASS` — contraseña de aplicación Gmail (obligatoria)
- `CONTACT_EMAIL_TO` — default temporal `claritymind.ceo@gmail.com`
- `CONTACT_EMAIL_FROM` — remitente visible (default Consultas Dr. Pascual)
- `FIREBASE_PROJECT_ID` — default `dr-tomas-pascual`
- `FIREBASE_SERVICE_ACCOUNT` — JSON service account (Admin SDK, obligatorio en prod)
- `GOOGLE_APPLICATION_CREDENTIALS` — alternativa local: ruta al JSON de service account

## Firestore — consultas

- Colección: `consultas`
- Campos: `name`, `email`, `phone`, `subject`, `message`, `source`, `createdAt`, `emailSent`, `emailSentAt`, `emailError`
- Escritura solo vía backend (`firebase-admin`); reglas bloquean acceso cliente
- **Setup credenciales:** `service-account.json` (gitignored) + `GOOGLE_APPLICATION_CREDENTIALS=./service-account.json` en `.env`. En Vercel: `FIREBASE_SERVICE_ACCOUNT` (JSON) + `FIREBASE_PROJECT_ID`.
- **Reglas desplegadas:** 2026-05-29 (`firebase deploy --only firestore:rules`, cuenta ClarityMind).
- `PORT` — puerto del servidor (default 5050)
- `NODE_ENV` — `production` sirve estáticos desde `dist/`
- `DISABLE_HMR` — desactiva HMR en Vite si es `true`

## Arquitectura

- `server.ts` — Express, APIs, Vite middleware en dev
- `src/App.tsx` — shell horizontal por secciones; header `fixed` con espaciador dinámico (`ResizeObserver`)
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
- **APIs serverless:** `api/consult.ts`, `api/v1/messages.ts`, `api/contact.ts` (formulario → email vía Gmail SMTP)
- **Último deploy:** 2026-05-29 (V2 perla/teal)

## Deuda / notas

- Carpeta del repo se llama `remix_-pagina-dr-pascual` pero el stack es Vite+Express, no Remix.
- Los tokens `@theme` existen pero los componentes usan hex inline. Migrar a tokens Tailwind mejoraría mantenibilidad.
- En Vercel producción: `OPENAI_API_KEY`, opcional `OPENAI_MODEL` (default `gpt-4o-mini`).
