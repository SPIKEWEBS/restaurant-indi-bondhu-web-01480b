# TODO — Pendiente antes de entregar al cliente

## 🔴 Crítico (sin esto el site no es entregable)

- [ ] **Imágenes del restaurante**: Verificar que TODAS las imágenes existen en `/images/`:
  - `/images/lrm-export-20180713-124339.jpg` (logo — navbar + hero)
  - `/images/image-crop-200000003.jpg` (hero background — sección BONDHU)
  - `/images/banner-20web.jpg` (banner experiencia diferente)
  - `/images/boton-20romo-20carta-0.jpg` (botón carta — sección especialidades)
  - `/images/boton-20romo-20mesa-6.jpg` (botón mesa — sección especialidades)
  - `/images/20180707-200236-8.jpg` (galería interior)
  - `/images/20180707-212357.jpg` (galería plato)
- [ ] **Email de contacto**: Verificar que `majspice.bondhu@gmail.com` es el email real y operativo
- [ ] **Teléfono de contacto**: Verificar que `971 37 34 73` es correcto y operativo
- [ ] **Textos legales (Aviso Legal, Política de Privacidad, Política de Cookies)**: Actualmente contienen texto placeholder genérico. Solicitar al cliente los textos legales reales o contratar un servicio de generación de textos legales adaptados a la actividad
- [ ] **Sección "Elige Tu Mesa"**: El original mencionaba reservas online. Confirmar si hay sistema de reservas (TheFork, ElTenedor, Resy, etc.) e integrar el enlace o widget correspondiente

## 🟡 Importante (mejora significativa)

- [ ] **Favicon**: Reemplazar el favicon por defecto de Vite por el logo real del restaurante Bondhu (`/images/lrm-export-20180713-124339.jpg` recortado o versión favicon)
- [ ] **og:image**: Añadir imagen real para Open Graph en el `index.html` (recomendado: `/images/banner-20web.jpg` o `/images/image-crop-200000003.jpg` en formato 1200x630)
- [ ] **Google Maps / Mapa**: El original no tenía mapa embebido pero sería útil añadir un iframe de Google Maps con la dirección exacta `Plaça Jaume II, 3 A, 07750 Ferreries, Illes Balears` en la sección de contacto
- [ ] **Galería ampliada**: En el original había 4 imágenes en la galería (grid-4), pero solo 2 están disponibles en `/images/`. Si el cliente tiene más fotos del restaurante, añadirlas al array `galeria` en `data/siteData.js`
- [ ] **Sitemap.xml**: Crear sitemap para las 7 páginas del site (/, /carta/, /elige-tu-mesa/, /contacto/, /aviso-legal/, /politica-de-privacidad/, /politica-de-cookies/)
- [ ] **Analytics**: Consultar al cliente si tenía Google Analytics / Google Tag Manager activo. Si sí, añadir el tracking ID correspondiente

## 🟢 Opcional (nice-to-have)

- [ ] **Cookie consent banner**: El original tenía un banner de cookies funcional. Considerar añadir una librería ligera (ej: `vue-cookie-comply`) con las dos opciones del original: "Aceptar solo lo necesario" y "Aceptar todo"
- [ ] **PWA**: Añadir `manifest.json` + service worker para soporte offline
- [ ] **Lightbox en galería**: El original tenía un efecto lightbox (litebox) al hacer clic en las imágenes de la galería. Integrar una librería ligera (ej: `vue-easy-lightbox`) para replicar ese comportamiento
- [ ] **Animaciones de entrada**: El original tenía clases `i-a` de animación. Se pueden añadir con Intersection Observer para que los headings aparezcan al hacer scroll
- [ ] **Sistema de reservas online**: Si el restaurante usa TheFork / ElTenedor, integrar el widget de reservas en la página "Elige Tu Mesa"

## ✅ Hecho automáticamente

- [x] Estructura Vue 3 completa con `<script setup>` y Composition API
- [x] Router con todas las rutas: `/`, `/carta/`, `/elige-tu-mesa/`, `/contacto/`, `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/`
- [x] Navbar responsive con menú hamburguesa para móvil
- [x] Hero section 100vh con imagen de fondo y overlay oscuro
- [x] Sección "ųŋą ɛҳ℘ɛཞıɛŋƈıą ɖıʄɛཞɛŋɬɛ" con imagen de fondo banner
- [x] Sección Especialidades Hindúes con grid 2 columnas (carta + mesa)
- [x] Galería de fotos del restaurante
- [x] Sección "Dónde estamos" con datos de contacto en cards
- [x] Sección "Nuestros horarios" con cards diferenciadas (abierto/cerrado)
- [x] CSS custom properties con paleta de colores real (#2B1F1A, #F4E4D0, #E8AD3D)
- [x] Diseño mobile-first con media queries
- [x] Accesibilidad WCAG 2.1 AA: alt en imágenes, aria-labels, skip-link, focus-visible
- [x] SEO: document.title dinámico por vista, headings jerárquicos
- [x] Performance: loading="lazy" en todas las imágenes excepto hero, fetchpriority="high" en hero
- [x] Copyright correcto: © 2026 SpikeWebs
- [x] Footer con links legales
- [x] Vistas para páginas legales (Aviso Legal, Política de Privacidad, Política de Cookies)
- [x] Datos del negocio centralizados en `data/siteData.js`
- [x] Sin frameworks CSS externos (sin Bootstrap, Tailwind, etc.)

## 🧪 QA — Verificar antes de enviar al cliente

- [ ] **Navegación**: Verificar que todos los links del navbar cargan su vista sin error 404 (especialmente `/carta/`, `/elige-tu-mesa/`, `/contacto/`)
- [ ] **Imágenes**: Verificar que las 7 imágenes en `/images/` cargan correctamente en producción
- [ ] **Hero**: Verificar que la imagen de fondo `/images/image-crop-200000003.jpg` cubre correctamente el 100vh en todos los dispositivos
- [ ] **Responsive**: Revisar diseño en iPhone 14 (390px) y iPad (768px) — especialmente el grid de 2 columnas de Especialidades Hindúes
- [ ] **Menú hamburguesa**: Verificar que el menú mobile se abre/cierra correctamente y que el scroll se bloquea al abrirlo
- [ ] **CTA "Llamar"**: Verificar que el botón de teléfono abre la app de llamadas en móvil (href="tel:+34971373473")
- [ ] **Email**: Verificar que el link de email abre el cliente de correo (href="mailto:...")
- [ ] **Texto especial**: Verificar que el texto `ųŋą ɛҳ℘ɛཞıɛŋƈıą ɖıʄɛཞɛŋɬɛ` se renderiza correctamente en todos los navegadores (caracteres Unicode especiales)
- [ ] **Sección Os esperamos!**: Verificar que el `<h1>` en GaleriaRestaurante.vue no genera advertencia de múltiples h1 (la vista tiene el h1 sr-only, y cada sección usa h1 como en el original — este es el comportamiento esperado del original)
- [ ] **Links de imágenes en Especialidades**: Verificar que hacer clic en la imagen de "carta" navega a `/carta/` y en "mesa" navega a `/elige-tu-mesa/`
- [ ] **Build de producción**: Ejecutar `npm run build` y verificar que no hay errores ni warnings críticos
- [ ] **Netlify Deploy**: Verificar que el archivo `netlify.toml` tiene la redirección SPA `/* → /index.html 200` para que el router de Vue funcione en producción
