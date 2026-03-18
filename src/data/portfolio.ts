import type { ImageMetadata } from 'astro';

import Alfred from '../assets/images/alfred.png';
import AlfredApp from '../assets/images/alfredApp.webp';
import Jumbo from '../assets/images/jumbo.png';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string;
  image: string | ImageMetadata;
  details: {
    summary: string;
    technologies: string[];
    bullets: string[];
    gallery?: string[];
    liveUrl?: string;
    liveLabel?: string;
    videoUrl?: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'alfred-app',
    title: 'Alfred App',
    description: 'Aplicacion de Alfred',
    tech: 'Flutter',
    image: AlfredApp,
    details: {
      summary:
        'Aplicacion movil de Alfred listada en este portafolio. En este repositorio no existe una ficha historica extendida como en CV-Hruiz, por lo que se conserva aqui una descripcion breve basada en el proyecto actual.',
      technologies: ['Flutter'],
      bullets: [
        'Proyecto orientado a experiencia movil.',
        'Hace parte del portafolio profesional actual.',
        'La ficha puede ampliarse despues con mas contexto funcional o capturas adicionales.'
      ]
    }
  },
  {
    id: 'alfred-web',
    title: 'Alfred',
    description: 'Pagina oficil de alfred',
    tech: 'React, Redux, html, material-ui',
    image: Alfred,
    details: {
      summary:
        'Sitio oficial de Alfred incluido en el portafolio actual. El detalle extendido no estaba en los modales del proyecto anterior, asi que se mantiene una ficha corta y clara.',
      technologies: ['React', 'Redux', 'HTML', 'Material UI'],
      bullets: [
        'Proyecto web corporativo listado en el portafolio.',
        'Construido con stack frontend basado en React.',
        'Puede enriquecerse mas adelante con logros, responsabilidades y enlaces si los tienes.'
      ]
    }
  },
  {
    id: 'jumbo-vtex',
    title: 'Jumbo Colombia - VTEX-IO',
    description: 'Reconstruccion de la pagina totalmente con tecnologia VTEX-IO',
    tech: 'VTEX-IO, React, Redux, html, typescript, GraphQL',
    image: Jumbo,
    details: {
      summary:
        'Proyecto de migracion y renovacion total desde VTEX legacy hacia VTEX-IO para Tiendas Jumbo Colombia.',
      technologies: ['VTEX-IO', 'HTML', 'React', 'Redux', 'Typescript', 'GraphQL'],
      bullets: [
        'Actualizar la pagina completamente, migrando desde VTEX legacy a VTEX-IO.',
        'Mejorar procesos de promociones y manejo de contenido dinamico.',
        'Componetizar secciones y personalizar checkout segun necesidades corporativas.',
        'Trabajo en equipo de 3 desarrolladores, con rol de liderazgo tecnico y estructuracion de soluciones IO.'
      ],
      gallery: ['/portfolio/legacy/jumbo.png'],
      liveUrl: 'https://www.tiendasjumbo.co/',
      liveLabel: 'Ver sitio',
    }
  },
  {
    id: 'hotel-management',
    title: 'Hotel Managment app',
    description: 'Aplicacion para administrar un hotel',
    tech: 'React, Redux, html, less, ant design, typescript, Nodejs, supabase',
    image: '/portfolio/legacy/hot1.PNG',
    details: {
      summary:
        'Web app para administracion hotelera con foco en flujo colaborativo, mejores practicas y trabajo en equipo.',
      technologies: ['HTML', 'LESS', 'Ant Design', 'React', 'Redux', 'Typescript', 'Supabase', 'NodeJS', 'PostgreSQL'],
      bullets: [
        'Construccion de una web app desde cero para gestion hotelera.',
        'Proyecto desarrollado en un equipo de 10 personas usando SCRUM.',
        'Trabajo por parejas con rotacion de compañeros para colaborar con todo el equipo.',
        'Uso de Git y Airtable para organizacion de tareas y seguimiento del proyecto.'
      ],
      gallery: ['/portfolio/legacy/hot1.PNG', '/portfolio/legacy/hot2.PNG', '/portfolio/legacy/hot3.PNG'],
      videoUrl: 'https://www.youtube.com/embed/gpWuFmZhwfA'
    }
  },
  {
    id: 'country-app',
    title: 'Country app',
    description: 'Aplicacion de actividades en paises',
    tech: 'React, Redux, Nodejs, PostgreSQL',
    image: '/portfolio/legacy/coun1.PNG',
    details: {
      summary:
        'Aplicacion para guardar actividades en una lista de paises usando una API externa y persistencia propia.',
      technologies: ['HTML', 'SASS', 'React', 'Redux', 'react-router-dom', 'NodeJS', 'PostgreSQL'],
      bullets: [
        'Consulta de paises desde una API externa.',
        'Creacion y almacenamiento de actividades internas asociadas a paises.',
        'Frontend y backend conectados con base de datos PostgreSQL.'
      ],
      gallery: ['/portfolio/legacy/coun1.PNG'],
      liveUrl: 'https://ft-10-pi-countries-hruiz13.vercel.app/',
      liveLabel: 'Ver demo'
    }
  },
  {
    id: 'batalla-naval',
    title: 'Batalla Naval App',
    description: 'Juego en linea para 2',
    tech: 'React, Nodejs, socket-io',
    image: '/portfolio/legacy/bn1.PNG',
    details: {
      summary:
        'Juego online para dos jugadores con comunicacion en tiempo real usando sockets.',
      technologies: ['HTML', 'SASS', 'React', 'react-router-dom', 'NodeJS', 'Socket-io'],
      bullets: [
        'Implementacion del juego Batalla Naval en linea.',
        'Comunicacion en tiempo real para dos jugadores.',
        'Experiencia interactiva soportada por Socket-io.'
      ],
      gallery: ['/portfolio/legacy/bn1.PNG'],
      liveUrl: 'http://bn.hruiz.com',
      liveLabel: 'Ver demo'
    }
  },
  {
    id: 'calendar-app',
    title: 'Calendar App',
    description: 'Calendario',
    tech: 'React, Redux, router-dom, Nodejs, MySQL, material-ui',
    image: '/portfolio/legacy/calendario.PNG',
    details: {
      summary:
        'Aplicacion de calendario para manejo de actividades en parcelaciones.',
      technologies: ['HTML', 'CSS', 'React', 'Redux', 'react-router-dom', 'NodeJS', 'MySQL'],
      bullets: [
        'Calendario de actividades con enfoque administrativo.',
        'Interfaz basada en Material UI.',
        'Soporte backend para persistencia de eventos.'
      ],
      gallery: ['/portfolio/legacy/calendario.PNG']
    }
  },
  {
    id: 'e-commerce',
    title: 'E-commerce',
    description: 'Tienda virtual de productos.',
    tech: 'Laravel, MySQL, Javascript, Mercadopago, Paypal',
    image: '/portfolio/legacy/hruiz1.PNG',
    details: {
      summary:
        'Plataforma e-commerce con flujo de compras, pagos y panel administrativo.',
      technologies: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Laravel', 'PHP (MVC)', 'MySQL'],
      bullets: [
        'Registro de usuarios para compras.',
        'Pagos integrados con Mercadopago y PayPal.',
        'Carrito de compras con soporte para COP y USD.',
        'Panel administrativo para usuarios, categorias, productos y ventas.'
      ],
      gallery: [
        '/portfolio/legacy/hruiz1.PNG',
        '/portfolio/legacy/hruiz2.PNG',
        '/portfolio/legacy/hruiz3.PNG',
        '/portfolio/legacy/hruiz4.PNG'
      ],
      liveUrl: 'https://hruiz.com',
      liveLabel: 'Ver sitio'
    }
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Aplicacion del tiempo.',
    tech: 'React, Redux, router-dom',
    image: '/portfolio/legacy/wapp1.PNG',
    details: {
      summary:
        'Aplicacion para consultar el clima por ciudad con vista de detalle y conversion de temperatura.',
      technologies: ['HTML', 'CSS', 'React', 'Redux', 'react-router-dom'],
      bullets: [
        'Busqueda por ciudad.',
        'Vista detallada por resultado.',
        'Cambio de unidades entre grados Celsius y Fahrenheit.'
      ],
      gallery: ['/portfolio/legacy/wapp1.PNG', '/portfolio/legacy/wapp2.PNG'],
      liveUrl: 'https://hruiz13.github.io/weather-app/',
      liveLabel: 'Ver demo'
    }
  },
  {
    id: 'country-react-native',
    title: 'Country App',
    description: 'Aplicacion de actividades en paises',
    tech: 'React Native, Nodejs',
    image: '/portfolio/legacy/counat2.PNG',
    details: {
      summary:
        'Adaptacion de Country App a React Native para experiencia movil.',
      technologies: ['HTML', 'React Native', 'NodeJS', 'PostgreSQL'],
      bullets: [
        'Version movil de Country App.',
        'Consumo de API externa de countries.',
        'Base de datos para actividades internas.'
      ],
      gallery: ['/portfolio/legacy/counat.PNG', '/portfolio/legacy/counat2.PNG'],
      videoUrl: 'https://www.youtube.com/embed/wBQ7p7hVGH4'
    }
  },
  {
    id: 'aerolinea-virtual',
    title: 'Aerolinea Virtual',
    description: 'Pagina web de una aerolinea virtual.',
    tech: 'html, css, php, mysql',
    image: '/portfolio/legacy/ata1.PNG',
    details: {
      summary:
        'Plataforma web para administrar una aerolinea virtual regional.',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
      bullets: [
        'Registro y login con base de datos MySQL.',
        'Gestion de pilotos, rangos, horas de vuelo y contratos.',
        'Administracion de vuelos, noticias, aeronaves y procesos del staff.'
      ],
      gallery: ['/portfolio/legacy/ata1.PNG', '/portfolio/legacy/ata2.PNG', '/portfolio/legacy/ata3.PNG'],
      videoUrl: 'https://www.youtube.com/embed/I_KP_PFIsgA'
    }
  },
  {
    id: 'administracion-produccion',
    title: 'Administracion produccion',
    description: 'Pagina web de administracion para empresa.',
    tech: 'PHP, MySQL, Javascript, Sockets-io, Nodejs, express',
    image: '/portfolio/legacy/al1.PNG',
    details: {
      summary:
        'Sistema para administrar proceso de produccion, contabilidad y operacion empresarial.',
      technologies: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Bootstrap', 'PHP (MVC)', 'MySQL', 'Node', 'Express', 'Sockets-io'],
      bullets: [
        'Gestion de ordenes de produccion, facturas, contabilidad y graficos.',
        'Roles diferenciados para admin, produccion y secretaria.',
        'Autenticacion, vistas MVC y actualizacion de datos via sockets.',
        'Montaje de servidor Linux con LAMP, Node, MySQL y RAID para la empresa.'
      ],
      gallery: ['/portfolio/legacy/al1.PNG', '/portfolio/legacy/al2.PNG'],
      videoUrl: 'https://www.youtube.com/embed/QToqOxNv2Mw'
    }
  },
  {
    id: 'peso-balance',
    title: 'Peso y balance',
    description: 'Pagina web para realizar peso y balance de un avion.',
    tech: 'html, css, php, mysql',
    image: '/portfolio/legacy/aaa1.PNG',
    details: {
      summary:
        'Sistema para calcular peso y balance de aeronaves de una escuela de aviacion.',
      technologies: ['HTML', 'Photoshop', 'PHP', 'MySQL'],
      bullets: [
        'Seleccion de aeronave, combustible, pesos y destino.',
        'Consulta de destinos y tablas desde base de datos.',
        'Generacion automatica del balance y validacion de aptitud para vuelo.',
        'Exportacion de archivo para impresion y despacho.'
      ],
      gallery: ['/portfolio/legacy/aaa1.PNG', '/portfolio/legacy/aaa2.PNG', '/portfolio/legacy/aaa3.PNG'],
      videoUrl: 'https://www.youtube.com/embed/FLapgdf9iCM'
    }
  }
];
