export default {
  /* ── Identidad ── */
  nombre: 'Restaurant Indi Bondhu',
  nombreCorto: 'BONDHU',
  subtitulo: 'Indian Premium Restaurant',
  tagline: 'Los sabores de la India en un ambiente sofisticado',
  descripcion:
    'Entre nuestras especialidades encontrarás todos los platos típicos de la India, desde Biryanis cocinados en nuestro horno Tandoori hasta diferentes Curry, platos Balti estilo Punjal y tamién los famosos Naan. Te lo explicamos todo en nuestra Carta.',

  /* ── Contacto ── */
  direccion: 'Plaça Jaume II, 3 A, 07750 Ferreries, Illes Balears',
  telefono: '(+34) 971 37 34 73',
  telefonoRaw: '+34971373473',
  email: 'majspice.bondhu@gmail.com',

  /* ── Google ── */
  rating: 4.8,
  ratingCount: 563,

  /* ── Horarios ── */
  horarios: [
    { dias: 'Miércoles - Domingo', franjas: ['13:00h - 16:00h', '19.30h - 23:00h'] },
    { dias: 'Lunes y Martes', franjas: ['Cerrado'] },
  ],

  /* ── Navegación principal ── */
  navLinks: [
    { label: 'INICIO', to: '/' },
    { label: 'CARTA', to: '/carta/' },
    { label: 'ELIGE TU MESA', to: '/elige-tu-mesa/' },
    { label: 'COMO LLEGAR / CONTACTO', to: '/contacto/' },
  ],

  /* ── Footer links ── */
  footerLinks: [
    { label: 'Aviso Legal', to: '/aviso-legal/' },
    { label: 'Política de Privacidad', to: '/politica-de-privacidad/' },
    { label: 'Política de Cookies', to: '/politica-de-cookies/' },
  ],

  /* ── Copyright ── */
  copyright: '© 2026 SpikeWebs',

  /* ── Especialidades ── */
  especialidades: 'TANDOORI - CURRY - BIRYANIS - BALTI - NAAN',

  /* ── Carta ── */
  cartaTexto:
    'En Bondhu Indian Premium Restaurant utilizamos las recetas típicas de la India. Te las explicamos a continuación.',
  cartaUrl: '/carta/',

  /* ── Imágenes placeholder ── */
  images: {
    /* posición DOM 0 — logo block */
    logo: 'https://placehold.co/800x600?text=desconocido%205',
    /* posición DOM 1 — sección BONDHU hero */
    hero: 'https://placehold.co/800x600?text=desconocido%203',
    /* posición DOM 2 — sección "una experiencia diferente" */
    experiencia: 'https://placehold.co/800x600?text=desconocido%201',
    /* posición DOM 3, 4, 6, 8 — especialidades */
    especialidades: [
      'https://placehold.co/800x600?text=desconocido%204',
      'https://placehold.co/800x600?text=desconocido%202',
      'https://placehold.co/800x600?text=desconocido%206',
      'https://placehold.co/800x600?text=desconocido%207',
    ],
  },

  /* ── Comedor / Elige tu mesa ── */
  comedor: {
    titulo: 'ELIGE TU MESA',
    subtitulo: 'Nuestro Comedor',
    descripcion:
      'Disponemos de un amplio y acogedor comedor con mullidas sillas de gran comodidad. Una decoración ecléctica de inspiración hindú que junto a nuestras recetas te harán vivir una experiencia gastronómica diferente. Viaja a la India más chic sin salir de Menorca. Los meses de verano o si hace buen tiempo, también disponemos de una agradable terraza para disfrutar al aire libre, si lo prefieres. Nuestra prioridad es tu máxima satisfacción, si tienes alguna sugerencia, no dudes en hacérnoslo saber, estamos a tu disposición.',
  },
}
