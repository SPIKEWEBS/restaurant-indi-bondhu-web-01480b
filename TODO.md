# TODO — Pendiente antes de entregar al cliente

## 🔴 Crítico (sin esto el site no es entregable)

- [ ] **Imágenes reales**: Reemplazar los 7 placeholders de `placehold.co` con las imágenes reales del restaurante. Las fotos deben colocarse en `/public/images/` y actualizar las URLs en `src/data/siteData.js`:
  - `images.logo` → logo del restaurante (aparece en el hero, clase `logo-block`, posición DOM 0)
  - `images.hero` → foto del interior/fachada del restaurante (hero portada, posición DOM 1)
  - `images.experiencia` → foto de ambiente/experiencia (sección "una experiencia diferente", posición DOM 2)
  - `images.especialidades[0]` → foto de plato hindú (posición DOM 3)
  - `images.especialidades[1]` → foto de plato hindú (posición DOM 4)
  - `images.especialidades[2]` → foto de plato hindú (posición DOM 6)
  - `images.especialidades[3]` → foto de plato hindú (posición DOM 8)
- [ ] **Teléfono real confirmado**: Verificar que `971 37 34 73` sigue siendo el número activo del restaurante. Los botones "Llama y Reserva Ahora" enlazan directamente con `tel:+34971373473`.
- [ ] **Email real confirmado**: Verificar que `majspice.bondhu@gmail.com` sigue siendo el email activo. Los links de email en footer y contacto apuntan a este correo.
- [ ] **Contenido de la Carta**: La subpágina `/carta/` no muestra la carta real (el original tenía la carta en formato PDF o descripción extendida). Añadir el contenido real de la carta o enlace al PDF original. El texto actual es solo el introductorio genérico del scraping.
- [ ] **Reserva online**: El original tenía un sistema de reserva online ("reserva online o telefónica"). Si existe una plataforma de reservas externa (ej: TheFork, Cover Manager, etc.), añadir el enlace real en los botones CTA de `/elige-tu-mesa/` y en la sección `NuestroRestaurante.vue`.

## 🟡 Importante (mejora significativa)

- [ ] **Favicon**: Reemplazar el favicon por defecto de Vite con el logo/favicon propio del restaurante Bondhu. Colocar `favicon.ico` y/o `favicon.svg` en `/public/`.
- [ ] **Google Maps embed**: En `/contacto/` hay un placeholder de mapa. Añadir el iframe real de Google Maps con la dirección `Plaça Jaume II, 3 A, 07750 Ferreries, Illes Balears`. Requiere aceptar las condiciones de Google Maps o usar un embed sin API key.
- [ ] **og:image y meta tags por vista**: Añadir imagen real para Open Graph en `index.html` (`<meta property="og:image" content="...">`) — usar una foto del restaurante, no placeholder.
- [ ] **Textos Aviso Legal, Privacidad y Cookies**: Los contenidos de las páginas legales son genéricos. El cliente debe revisar y aprobar o sustituir por los textos legales redactados por su asesor.
- [ ] **Sitemap.xml**: Generar `/public/sitemap.xml` con las 7 rutas del sitio para mejorar el indexado SEO. Rutas: `/`, `/carta/`, `/elige-tu-mesa/`, `/contacto/`, `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/`.
- [ ] **robots.txt**: Añadir `/public/robots.txt` con `Sitemap: https://www.bondhu.es/sitemap.xml` (o el dominio definitivo).

## 🟢 Opcional (nice-to-have)

- [ ] **Banner de cookies**: El original tenía un banner de aceptación de cookies ("Aceptar solo lo necesario / Aceptar todo"). Implementar un componente Vue `CookieBanner.vue` con las dos opciones y almacenamiento en `localStorage`.
- [ ] **Google Analytics**: Si el cliente quiere tracking, añadir el ID de GA4 (no detectado en el scraping). Añadirlo en `index.html` antes del cierre de `</head>`.
- [ ] **PWA**: Añadir `manifest.json` + service worker para soporte offline y posibilidad de instalación en móvil.
- [ ] **Animaciones de entrada**: Las secciones pueden entrar con fade-in usando `IntersectionObserver` para mejorar la experiencia (ya preparado el sistema de transiciones en variables.css).

## ✅ Hecho automáticamente

- [x] Estructura Vue 3 completa con `<script setup>` en todos los componentes
- [x] Router con 7 rutas semánticas en español: `/`, `/carta/`, `/elige-tu-mesa/`, `/contacto/`, `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/`
- [x] Navbar responsive con menú hamburguesa en móvil y backdrop-filter blur
- [x] Hero 100vh con imagen de fondo + overlay oscuro para legibilidad
- [x] Secciones con fondo alternado: oscuro → blanco → surface → blanco
- [x] Sección "Especialidades Hindúes" con grid de 4 imágenes de platos
- [x] Sección "Dónde estamos" con cards de dirección, teléfono y email (WCAG)
- [x] Sección "Nuestros horarios" con horarios completos en cards
- [x] Footer con datos de contacto, links legales y copyright SpikeWebs
- [x] Accesibilidad WCAG 2.1 AA: alt en todas las imágenes, aria-labels, skip-link, focus-visible
- [x] Jerarquía de headings correcta (h1 → h2 → h3) en todas las vistas
- [x] `document.title` dinámico en cada vista con `onMounted`
- [x] `loading="lazy"` en todas las imágenes excepto hero (que tiene `fetchpriority="high"`)
- [x] `width` y `height` explícitos en todas las `<img>` para evitar CLS
- [x] `{ passive: true }` en el evento `scroll` del navbar
- [x] CSS mobile-first con media queries para tablet/desktop
- [x] CSS custom properties (variables) para colores, tipografía y espaciados
- [x] Sin frameworks CSS externos (solo CSS nativo)
- [x] Datos del negocio centralizados en `data/siteData.js`
- [x] Vistas legales (Aviso Legal, Privacidad, Cookies) con contenido base

## 🧪 QA — Verificar antes de enviar al cliente

- [ ] **Navbar**: Verificar que los 4 links principales (INICIO, CARTA, ELIGE TU MESA, COMO LLEGAR/CONTACTO) cargan su vista sin error 404
- [ ] **Links legales del footer**: Verificar Aviso Legal, Política de Privacidad, Política de Cookies
- [ ] **Botón "Llama y Reserva Ahora"**: Verificar en móvil real (iPhone/Android) que abre la app de teléfono al tocar
- [ ] **Botón email**: Verificar en móvil que abre el cliente de correo con `majspice.bondhu@gmail.com`
- [ ] **Imágenes**: Una vez colocadas las fotos reales en `/public/images/`, verificar que todas cargan sin error 404 y sin layout shift
- [ ] **Responsive móvil**: Revisar diseño en iPhone 14 (390px) — especialmente navbar hamburguesa y grid de especialidades
- [ ] **Responsive tablet**: Revisar en iPad (768px) — especialmente la sección "Experiencia Diferente" en 2 columnas
- [ ] **Hero en móvil**: Verificar que el h1 "BONDHU" y los textos del hero son legibles sobre la imagen con el overlay
- [ ] **Sección especialidades**: Verificar que el grid de 4 imágenes se adapta correctamente en todos los breakpoints
- [ ] **Scroll suave**: Verificar que la navegación entre secciones y el scroll-behavior funcionan en todos los navegadores principales
- [ ] **Formulario de reserva**: Si el cliente tiene un sistema de reservas externo (TheFork, etc.), verificar la integración antes de publicar
- [ ] **Velocidad**: Ejecutar Lighthouse en la home con las fotos reales para verificar performance > 90 en móvil
