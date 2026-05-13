// ============================================================
// BONDHU — Indian Premium Restaurant — Site Data
// ============================================================

export default {
  // --- Business Identity ---
  name: 'Bondhu',
  tagline: 'Indian Premium Restaurant',
  subtitle: 'Los sabores de la India en un ambiente sofisticado',
  description:
    'En Bondhu Indian Premium Restaurant utilizamos las recetas típicas de la India.',

  // --- Contact ---
  address: 'Plaça Jaume II, 3 A, 07750 Ferreries, Illes Balears',
  addressFull: 'Plaça Jaume II, 07750 Ferreries, Illes Balears, Spain',
  phone: '971 37 34 73',
  phoneHref: 'tel:+34971373473',
  email: 'majspice.bondhu@gmail.com',
  emailHref: 'mailto:majspice.bondhu@gmail.com',

  // --- Rating ---
  ratingScore: 4.8,
  ratingCount: 563,

  // --- Hours ---
  hours: [
    { days: 'Lunes', time: 'Cerrado' },
    { days: 'Martes', time: 'Cerrado' },
    { days: 'Miércoles - Domingo', time: '13:00h - 16:00h / 19.30h - 23:00h' },
  ],
  hoursShort: 'Miércoles - Domingo · 13:00 – 16:00 y 19:30 – 23:00',

  // --- Navigation (main) ---
  navLinks: [
    { label: 'INICIO', to: '/' },
    { label: 'CARTA', to: '/carta' },
    { label: 'ELIGE TU MESA', to: '/elige-tu-mesa' },
    { label: 'COMO LLEGAR / CONTACTO', to: '/contacto' },
  ],

  // --- Footer / Legal Links ---
  footerLegalLinks: [
    { label: 'Aviso Legal', to: '/aviso-legal' },
    { label: 'Política de Privacidad', to: '/politica-de-privacidad' },
    { label: 'Política de Cookies', to: '/politica-de-cookies' },
  ],

  // --- Copyright ---
  copyright: '© 2026 SpikeWebs',

  // --- Sections content ---

  // Hero (BONDHU section)
  hero: {
    heading: 'BONDHU',
    subheading: 'Indian Premium Restaurant',
    tagline: 'Los sabores de la India en un ambiente sofisticado',
    image: 'https://placehold.co/800x600?text=desconocido%203',
    imageAlt: 'Interior del restaurante Bondhu',
    ctaLabel: 'Llama y Reserva Ahora >>>',
    ctaHref: 'tel:+34971373473',
  },

  // "Una experiencia diferente" section
  experiencia: {
    heading: 'ųŋą ɛҳ℘ɛཞıɛŋƈıą ɖıʄɛཞɛŋɬɛ',
    image: 'https://placehold.co/800x600?text=desconocido%201',
    imageAlt: 'Una experiencia diferente en Bondhu',
  },

  // Especialidades section
  especialidades: {
    heading: 'ESPECIALIDADES HINDÚES',
    subheading: 'TANDOORI - CURRY - BIRYANIS - BALTI - NAAN',
    body: 'Entre nuestras especialidades encontrarás todos los platos típicos de la India, desde Biryanis cocinados en nuestro horno Tandoori hasta diferentes Curry, platos Balti estilo Punjal y tamién los famosos Naan. Te lo explicamos todo en nuestra Carta.',
    ctaLabel: 'Ver Nuestra Carta',
    ctaTo: '/carta',
    images: [
      {
        src: 'https://placehold.co/800x600?text=desconocido%204',
        alt: 'Especialidades hindúes - platos del restaurante Bondhu',
      },
      {
        src: 'https://placehold.co/800x600?text=desconocido%202',
        alt: 'Curry y platos típicos indios en Bondhu',
      },
      {
        src: 'https://placehold.co/800x600?text=desconocido%206',
        alt: 'Naan y Biryanis cocinados en horno Tandoori',
      },
      {
        src: 'https://placehold.co/800x600?text=desconocido%207',
        alt: 'Platos Balti estilo Punjal en Bondhu Ferreries',
      },
    ],
  },

  // Nuestro Restaurante section
  restaurante: {
    heading: 'NUESTRO RESTAURANTE',
    subheading: 'DIFERENTES ESPACIOS PARA CADA OCASIÓN',
    body1: 'Aquí puedes ver nuestro restaurante y elegir el lugar que mas te apetezca, para un grupo, más romántico, totalmente a tu gusto.',
    body2: 'Elige tu mesa y coméntanoslo en tu reserva online o telefónica.',
    ctaLabel: 'Llama y Reserva Ahora >>>',
    ctaHref: 'tel:+34971373473',
  },

  // Esperamos section
  esperamos: {
    heading: '¡Os esperamos!',
  },

  // Carta page content
  carta: {
    heading: 'NUESTRA CARTA',
    intro:
      'En Bondhu Indian Premium Restaurant utilizamos las recetas típicas de la India. Te las explicamos a continuación.',
    ctaLabel: 'Llama y Reserva Ahora >>>',
    ctaHref: 'tel:+34971373473',
  },

  // Elige tu mesa page content
  eligeTuMesa: {
    heading: 'ELIGE TU MESA',
    comedor: {
      title: 'Nuestro Comedor',
      body: 'Disponemos de un amplio y acogedor comedor con mullidas sillas de gran comodidad. Una decoración ecléctica de inspiración hindú que junto a nuestras recetas te harán vivir una experiencia gastronómica diferente. Viaja a la India más chic sin salir de Menorca.',
    },
    terraza: {
      body: 'Los meses de verano o si hace buen tiempo, también disponemos de una agradable terraza para disfrutar al aire libre, si lo prefieres.',
    },
    prioridad: {
      body: 'Nuestra prioridad es tu máxima satisfacción, si tienes alguna sugerencia, no dudes en hacérnoslo saber, estamos a tu disposición.',
    },
  },

  // Logo placeholder
  logo: {
    src: 'https://placehold.co/800x600?text=desconocido%205',
    alt: 'Bondhu Indian Premium Restaurant logo',
  },
}
