export default {
  // Business Info
  name: 'Restaurant Indi Bondhu',
  shortName: 'BONDHU',
  tagline: 'Indian Premium Restaurant',
  subtitulo: 'Los sabores de la India en un ambiente sofisticado',

  // Contact
  direccion: 'Plaça Jaume II, 3 A, 07750 Ferreries, Illes Balears',
  telefono: '971 37 34 73',
  telefonoHref: 'tel:+34971373473',
  email: 'majspice.bondhu@gmail.com',
  emailHref: 'mailto:majspice.bondhu@gmail.com',

  // Rating
  rating: '4.8/5',
  numResenas: '563 reseñas',

  // Horarios
  horarios: [
    { dias: 'Miércoles - Domingo', mañana: '13:00h - 16:00h', tarde: '19.30h - 23:00h' },
    { dias: 'Lunes y Martes', cerrado: true }
  ],

  // Navigation
  navLinks: [
    { label: 'Inicio', href: '/' },
    { label: 'Carta', href: '/carta/' },
    { label: 'Elige Tu Mesa', href: '/elige-tu-mesa/' },
    { label: 'Como llegar / Contacto', href: '/contacto/' }
  ],

  // Footer Legal Links
  legalLinks: [
    { label: 'Aviso Legal', href: '/aviso-legal/' },
    { label: 'Política de Privacidad', href: '/politica-de-privacidad/' },
    { label: 'Política de Cookies', href: '/politica-de-cookies/' }
  ],

  // Copyright — SpikeWebs
  copyright: '© 2026 SpikeWebs',

  // Hero Section
  hero: {
    titulo: 'BONDHU',
    subtitulo: 'Indian Premium Restaurant',
    imagenFondo: '/images/image-crop-200000003.jpg',
    logo: '/images/lrm-export-20180713-124339.jpg'
  },

  // Experience Section (banner)
  experience: {
    titulo: 'ųŋą ɛҳ℘ɛཞıɛŋƈıą ɖıʄɛཞɛŋɬɛ',
    imagenFondo: '/images/banner-20web.jpg'
  },

  // Especialidades Section
  especialidades: {
    titulo: 'ESPECIALIDADES HINDÚES',
    subtitulo: 'TANDOORI - CURRY - BIRYANIS - BALTI - NAAN',
    descripcion: 'Entre nuestras especialidades encontrarás todos los platos típicos de la India, desde Biryanis cocinados en nuestro horno Tandoori hasta diferentes Curry, platos Balti estilo Punjal y tamién los famosos Naan. Te lo explicamos todo en nuestra Carta.',
    imagenCarta: '/images/boton-20romo-20carta-0.jpg',
    cartaHref: '/carta/',
    imagenMesa: '/images/boton-20romo-20mesa-6.jpg',
    mesaHref: '/elige-tu-mesa/'
  },

  // Restaurante Section
  restaurante: {
    titulo: 'NUESTRO RESTAURANTE',
    subtitulo: 'DIFERENTES ESPACIOS PARA CADA OCASIÓN',
    descripcion1: 'Aquí puedes ver nuestro restaurante y elegir el lugar que mas te apetezca, para un grupo, más romántico, totalmente a tu gusto.',
    descripcion2: 'Elige tu mesa y coméntanoslo en tu reserva online o telefónica.',
    ctaText: 'Llama y Reserva Ahora >>>'
  },

  // Gallery images
  galeria: [
    { src: '/images/20180707-200236-8.jpg', alt: 'Interior del restaurante Bondhu', width: 1440, height: 1920 },
    { src: '/images/20180707-212357.jpg', alt: 'Plato típico indio en Bondhu', width: 1440, height: 1920 }
  ],

  // Carta page
  carta: {
    titulo: 'NUESTRA CARTA',
    subtitulo: 'Indian Premium Restaurant',
    descripcion: 'En Bondhu Indian Premium Restaurant utilizamos las recetas típicas de la India. Te las explicamos a continuación.',
    ctaText: 'Llama y Reserva Ahora >>>',
    cartaUrl: '/carta/'
  },

  // Elige tu mesa page
  eligeTuMesa: {
    titulo: 'ELIGE TU MESA',
    subtitulo: 'Nuestro Comedor',
    descripcion: 'Disponemos de un amplio y acogedor comedor con mullidas sillas de gran comodidad. Una decoración ecléctica de inspiración hindú que junto a nuestras recetas te harán vivir una experiencia gastronómica diferente. Viaja a la India más chic sin salir de Menorca. Los meses de verano o si hace buen tiempo, también disponemos de una agradable terraza para disfrutar al aire libre, si lo prefieres. Nuestra prioridad es tu máxima satisfacción, si tienes alguna sugerencia, no dudes en hacérnoslo saber, estamos a tu disposición.'
  }
}
