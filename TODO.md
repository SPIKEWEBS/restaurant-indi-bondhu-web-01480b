# TODO — Pendiente antes de entregar al cliente

## 🔴 Crítico (sin esto el site no es entregable)

- [ ] **Imágenes reales**: Sustituir los 7 placeholders `placehold.co` por las fotografías reales del restaurante Bondhu. Las imágenes deben ir en `/public/images/`:
  - `desconocido-3.jpg` → Hero/portada (sección BONDHU, posición DOM 1)
  - `desconocido-1.jpg` → Sección "ųŋą ɛҳ℘ɛཞıɛŋƈıą ɖıʄɛཞɛŋɬɛ" (portada experiencia)
  - `desconocido-5.jpg` → Logo block (clase `logo-block`)
  - `desconocido-4.jpg` → Grid especialidades (posición 1)
  - `desconocido-2.jpg` → Grid especialidades (posición 2)
  - `desconocido-6.jpg` → Grid especialidades (posición 3)
  - `desconocido-7.jpg` → Grid especialidades (posición 4)
- [ ] **Teléfono verificado**: Confirmar que `971 37 34 73` es el número actual y operativo del restaurante
- [ ] **Email verificado**: Confirmar que `majspice.bondhu@gmail.com` es el email activo del restaurante
- [ ] **Carta / Menú**: La página `/carta` actualmente solo muestra texto introductorio y un botón de llamada. Si el restaurante tiene un PDF con la carta completa o una URL con los platos detallados, añadir el enlace o embeber el PDF. No se listaron platos en el HTML original.
- [ ] **Sección "NUESTRO RESTAURANTE" sin imágenes**: El original tiene una sección dedicada al comedor/restaurante. Si existen fotografías del local, añadirlas a `NuestroRestaurante.vue` en un grid de imágenes.

## 🟡 Importante (mejora significativa)

- [ ] **Favicon**: Reemplazar el favicon por defecto de Vite con el logo real del restaurante Bondhu (formato `.ico` + `.png` 192px y 512px)
- [ ] **og:image**: Añadir imagen real de Open Graph en `index.html` (meta property="og:image") — usar foto de portada del restaurante, mín. 1200×630px
- [ ] **Google Maps**: El original incluía información de ubicación (Plaça Jaume II, 3A, Ferreries). Añadir un `<iframe>` de Google Maps en la sección de contacto / footer con la dirección real. Requiere API key o iframe embed desde Google Maps.
- [ ] **Google Rating badge**: El restaurante tiene 4.8/5 con 563 reseñas en Google. Si se desea mostrar el badge oficial, integrar Google Places API.
- [ ] **Reservas online**: El navbar original tiene "ELIGE TU MESA" que apunta a una sección de reservas. Valorar integrar un sistema de reservas real (ej: Resy, TheFork, o formulario de reserva con backend Formspree/Netlify Forms con campos: nombre, fecha, hora, nº comensales, teléfono).
- [ ] **Sitemap.xml**: Generar `sitemap.xml` con las rutas: `/`, `/carta`, `/elige-tu-mesa`, `/contacto`, `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies`
- [ ] **robots.txt**: Añadir `robots.txt` básico en `/public/`

## 🟢 Opcional (nice-to-have)

- [ ] **Cookie consent banner**: El original tenía un banner de cookies con opciones "Aceptar solo lo necesario" / "Aceptar todo". Implementar con `vue-cookie-consent` o un componente propio que guarde preferencia en `localStorage`.
- [ ] **Animaciones de entrada**: Añadir `IntersectionObserver` para animar secciones al hacer scroll (fade-in suave).
- [ ] **PWA**: Añadir `manifest.json` y service worker para soporte offline básico.
- [ ] **Idiomas**: Si el restaurante recibe turismo internacional en Menorca, considerar versión en inglés/alemán (vue-i18n).
- [ ] **Horario dinámico**: Mostrar automáticamente "Abierto ahora" / "Cerrado" en el hero o navbar según el día y hora actual.

## ✅ Hecho automáticamente

- [x] Estructura Vue 3 completa con Composition API (`<script setup>`)
- [x] Router con 7 rutas semánticas en español (`/carta`, `/elige-tu-mesa`, `/contacto`, etc.)
- [x] Navbar responsive con menú hamburger para móvil
- [x] Navbar sticky con efecto blur/glassmorphism al hacer scroll
- [x] Hero 100vh con imagen de fondo + overlay oscuro
- [x] Secciones con fondo alternado (blanco / surface / dark)
- [x] Sección de contacto con grid de cards e iconos emoji (📍 ☎ ✉ 🕐)
- [x] Footer con 3 columnas: brand, dirección, horarios
- [x] Links legales en footer: Aviso Legal, Política de Privacidad, Política de Cookies
- [x] Skip-link de accesibilidad (`<a href="#main-content">`)
- [x] `:focus-visible` con outline visible en todos los elementos interactivos
- [x] `alt` descriptivo en todas las `<img>`
- [x] `loading="lazy"` en todas las imágenes excepto el hero (que lleva `fetchpriority="high"`)
- [x] `width` y `height` explícitos en todas las `<img>` para evitar CLS
- [x] `{ passive: true }` en el scroll listener del navbar
- [x] `document.title` dinámico en cada vista con `onMounted`
- [x] `aria-label` en todos los botones y links de icono/emoji
- [x] Jerarquía de headings correcta (h1 → h2 → h3) en cada vista
- [x] CSS custom properties para todos los valores de diseño (colores, fuentes, espaciados)
- [x] Responsive mobile-first con media queries
- [x] Copyright `© 2026 SpikeWebs` en el footer
- [x] Datos del negocio centralizados en `data/siteData.js`
- [x] Vistas para todas las subpáginas detectadas: Carta, Elige tu Mesa, Contacto, Aviso Legal, Política de Privacidad, Política de Cookies

## 🧪 QA — Verificar antes de enviar al cliente

- [ ] **Navegación**: Verificar que todos los links del navbar (`/`, `/carta`, `/elige-tu-mesa`, `/contacto`) cargan su vista sin error 404 en producción (Netlify/Vercel)
- [ ] **Historial del router**: Confirmar que en producción el servidor sirve `index.html` para todas las rutas SPA (añadir `_redirects` en Netlify: `/* /index.html 200`)
- [ ] **Imágenes placeholder**: Verificar que los 7 `placehold.co` carguen correctamente hasta que se sustituyan por las reales
- [ ] **Botón "Llamar"**: En móvil, verificar que `tel:+34971373473` abre la app de teléfono correctamente
- [ ] **Botón "Email"**: Verificar que `mailto:majspice.bondhu@gmail.com` abre el cliente de correo
- [ ] **Menú hamburger**: Verificar en iPhone 14 y viewport 375px que el menú abre/cierra correctamente y los links funcionan
- [ ] **Hero 100vh**: Verificar en móvil (iOS Safari) que el hero ocupa correctamente la pantalla completa (posibles problemas con `100vh` en Safari móvil — usar `100dvh` si hay problemas)
- [ ] **Texto especial**: Verificar que el heading "ųŋą ɛҳ℘ɛཞıɛŋƈıą ɖıʄɛཞɛŋɬɛ" se renderiza con la tipografía correcta y sin errores de encoding en todos los navegadores
- [ ] **Sección "Os esperamos"**: Verificar que el grid de cards se adapta correctamente en mobile (1 columna) y desktop (4 columnas)
- [ ] **Footer en móvil**: Verificar que las 3 columnas del footer pasan a 1 columna en pantallas pequeñas
- [ ] **Contraste de colores**: Verificar ratio de contraste del texto dorado (`#c8952a`) sobre fondo oscuro (`#1a1108`) — debe ser ≥ 4.5:1 para texto normal
- [ ] **Carta vacía**: Confirmar con el cliente si quiere añadir la carta completa en PDF o en formato digital antes de publicar
