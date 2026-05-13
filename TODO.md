# TODO — Pendiente antes de entregar al cliente

## 🔴 Crítico (sin esto el site no es entregable)

- [ ] **Imágenes reales**: Reemplazar todos los placeholders (`https://placehold.co/...`) con las fotos reales del restaurante. Hay 7 imágenes pendientes:
  - Hero/portada (sección BONDHU): `https://placehold.co/800x600?text=desconocido%203`
  - Sección "Una experiencia diferente": `https://placehold.co/800x600?text=desconocido%201`
  - Sección "ESPECIALIDADES HINDÚES" — imagen 1: `https://placehold.co/800x600?text=desconocido%204`
  - Sección "ESPECIALIDADES HINDÚES" — imagen 2: `https://placehold.co/800x600?text=desconocido%202`
  - Sección "ESPECIALIDADES HINDÚES" — imagen 3: `https://placehold.co/800x600?text=desconocido%206`
  - Sección "ESPECIALIDADES HINDÚES" — imagen 4: `https://placehold.co/800x600?text=desconocido%207`
  - Logo (clase `logo-block`): `https://placehold.co/800x600?text=desconocido%205` — ubicar en la navbar o hero

- [ ] **Logo real**: El sitio original tiene un logo propio (`logo-block`). Añadirlo a `AppNavbar.vue` en lugar del texto plano "Indian Premium Restaurant". Guardar como `/images/logo.png` o `.svg`.

- [ ] **Verificar teléfono**: Confirmar que `971 37 34 73` es el número actual del restaurante y que el `href="tel:+34971373473"` funciona correctamente en móvil.

- [ ] **Verificar email**: Confirmar que `majspice.bondhu@gmail.com` es el email activo y recibe mensajes correctamente.

- [ ] **Carta del restaurante (subpágina `/carta`)**: El original dice "Te las explicamos a continuación" pero el contenido de la carta real no estaba disponible en el HTML scrapeado. Si existe un PDF de la carta, añadir el link de descarga. Si los platos están online, añadirlos en `siteData.js`. Actualmente la página solo muestra botones de llamada.

- [ ] **Backend de reservas**: El sitio original enlaza a reservas telefónicas. Si se quiere añadir reserva online (formulario), conectar con un servicio como Netlify Forms, Formspree o Reservas Restaurante.

## 🟡 Importante (mejora significativa)

- [ ] **Favicon**: Reemplazar el favicon por defecto de Vite con el logo real del restaurante. Colocar en `public/favicon.ico` y `public/favicon.svg`.

- [ ] **Open Graph images**: Añadir imágenes OG reales para cada vista en el `index.html` o mediante un plugin de meta tags. Mínimo una imagen 1200×630 con el logo y el nombre del restaurante.

- [ ] **Google Maps embebido**: En la página `/contacto`, sustituir el placeholder de mapa por un `<iframe>` de Google Maps con el src real:
  ```
  https://www.google.com/maps/embed?pb=!1m18!1m12!...
  ```
  Buscar: "Plaça Jaume II 3A 07750 Ferreries Menorca" en Google Maps y copiar el embed.

- [ ] **Página "ELIGE TU MESA"**: El original mencionaba fotos del comedor y la terraza. Añadir imágenes reales del interior cuando estén disponibles.

- [ ] **Sitemap.xml**: Generar un sitemap con las rutas `/`, `/carta`, `/elige-tu-mesa`, `/contacto`, `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies` para mejorar indexación SEO.

- [ ] **Horarios del lunes y martes**: Verificar que "Lunes y Martes Cerrado" es correcto para la temporada actual (los horarios pueden cambiar en verano).

## 🟢 Opcional (nice-to-have)

- [ ] **Banner de cookies funcional con categorías**: El banner actual acepta/rechaza cookies pero no activa/desactiva Google Analytics u otras herramientas según la elección. Si se añade Analytics, implementar lógica condicional.

- [ ] **PWA / manifest.json**: Añadir `manifest.json` y service worker para soporte offline, especialmente útil para clientes que consultan el horario o teléfono sin conexión.

- [ ] **Animaciones de entrada**: El sitio original podía tener animaciones suaves al hacer scroll. Se pueden añadir con `IntersectionObserver` en las secciones.

- [ ] **Sección de reseñas Google**: El restaurante tiene 4.8/5 con 563 reseñas. Valorar mostrar este badge de calidad en la home o en el footer.

- [ ] **WhatsApp button**: Añadir botón flotante de WhatsApp para reservas rápidas si el restaurante lo usa.

## ✅ Hecho automáticamente

- [x] Estructura Vue 3 con `<script setup>` en todos los componentes
- [x] Router con rutas semánticas en español: `/carta`, `/elige-tu-mesa`, `/contacto`, `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies`
- [x] Navbar responsivo con menú hamburguesa para móvil
- [x] Navbar con backdrop-filter blur al hacer scroll
- [x] Footer con información de contacto, horarios y links legales
- [x] Hero 100vh con imagen de fondo y overlay oscuro
- [x] Sección "Una experiencia diferente" replicada
- [x] Sección "Especialidades Hindúes" con grid de 4 imágenes
- [x] Sección "Nuestro Restaurante" con CTA de llamada
- [x] Sección "Os esperamos!" replicada
- [x] Páginas: Carta, Elige Tu Mesa, Contacto, Aviso Legal, Política Privacidad, Política Cookies
- [x] Banner de cookies con "Aceptar solo lo necesario" / "Aceptar todo" + localStorage
- [x] CSS custom properties para colores, fuentes y espaciados
- [x] Responsive mobile-first con media queries
- [x] Accesibilidad WCAG 2.1 AA: aria-labels, skip-link, headings semánticos, focus-visible
- [x] `loading="lazy"` en todas las imágenes excepto el hero (`fetchpriority="high"`)
- [x] `document.title` dinámico en cada vista
- [x] Copyright "© 2026 SpikeWebs" en footer
- [x] `{ passive: true }` en el event listener de scroll del navbar
- [x] Datos del negocio centralizados en `data/siteData.js`

## 🧪 QA — Verificar antes de enviar al cliente

- [ ] **Navegación**: Verificar que todos los links del navbar cargan su vista sin error 404. Especialmente `/elige-tu-mesa` y `/contacto`.
- [ ] **Hero image**: Confirmar que la imagen del hero carga correctamente y el overlay oscuro garantiza legibilidad del texto blanco.
- [ ] **Responsive móvil (iPhone 14)**: Revisar navbar hamburguesa, grid de especialidades, footer en 2 columnas → 1 columna.
- [ ] **Responsive tablet (iPad)**: Revisar sección "Experiencia Diferente" (grid 2 cols) y grid de especialidades.
- [ ] **CTA "Llama y Reserva"**: Verificar que el botón abre la app de teléfono en móvil con `tel:+34971373473`.
- [ ] **Email link**: Verificar que `mailto:majspice.bondhu@gmail.com` abre el cliente de correo.
- [ ] **Banner de cookies**: Verificar que al hacer clic "Aceptar solo lo necesario" o "Aceptar todo" el banner desaparece y no vuelve a aparecer al recargar (localStorage funcionando).
- [ ] **Sección Carta**: Confirmar con el cliente si tiene PDF de carta o lista de platos para añadir el contenido real.
- [ ] **Página Elige Tu Mesa**: Confirmar con el cliente si tiene fotos del comedor y terraza para añadirlas.
- [ ] **Contraste de colores**: Verificar que el texto dorado `#c8a96e` sobre fondo blanco supera ratio 4.5:1 (puede necesitar ajuste a un tono más oscuro).
- [ ] **Focus visible**: Navegar el sitio solo con teclado (Tab) y verificar que el contorno de foco dorado es visible en todos los elementos interactivos.
