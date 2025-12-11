// footerLinks.js

/**
 * Estructura de datos para todos los enlaces del Footer.
 * Se organizan en un objeto, donde cada clave representa una columna.
 * El 'Contacto' se maneja de forma especial ya que usa diferentes tipos de datos (texto, arrays, objetos).
 */
export const FOOTER_DATA = {
    // Columna 1: Información Principal (Texto y Redes Sociales) - No requiere mapeo de enlaces, pero se define aquí si se necesita.
    principal: {
        titulo: "ConectAR-Dev",
        subtitulo: "Talento IT Argentino",
        descripcion: "La plataforma que conecta a los mejores freelancers argentinos del área IT con empresas que buscan talento nacional de calidad.",
        redes: [
            { icono: 'linkedin', url: 'https://linkedin.com/' },
            { icono: 'instagram', url: 'https://instagram.com/' },
            { icono: 'twitter', url: 'https://twitter.com/' },
        ],
    },

    // Columna 2: Servicios
    servicios: {
        titulo: "Servicios",
        enlaces: [
            { id: 'dev', texto: "Desarrollo Web", url: "/freelancers?categoria=Desarrollo%20Web" },
            { id: 'apps', texto: "Apps Móviles", url: "/freelancers?categoria=Desarrollo%20Mobile" },
            { id: 'db', texto: "Bases de Datos", url: "/freelancers?categoria=Bases%20de%20Datos" },
            { id: 'ia', texto: "Inteligencia Artificial", url: "/freelancers?categoria=Inteligencia%20Artificial" },
            { id: 'cloud', texto: "DevOps & Cloud", url: "/freelancers?categoria=DevOps%20%26%20Cloud" },
            { id: 'mentor', texto: "Mentorías", url: "/freelancers?categoria=Mentorías" },
        ]
    },

    // Columna 3: Empresa
    empresa: {
        titulo: "Empresa",
        enlaces: [
            { id: 'nosotros', texto: "Sobre Nosotros", url: "/sobre-nosotros" },
            { id: 'freelancers', texto: "Para Freelancers", url: "/freelancers" },
            { id: 'ayuda', texto: "Ayuda", url: "/contacto" },
        ]
    },

    // Columna 4: Contacto (Datos No Enlazables)
    contacto: {
        titulo: "Contacto",
        datos: [
            { tipo: 'email', valor: "conectardev.ar@gmail.com", url: "mailto:conectardev.ar@gmail.com", icono: 'mail' }
        ],
        // El bloque de "Orgullo Argentino" (puede ser un componente separado)
        claim: "Orgullo Argentino"
    },
    legales: {
        enlaces: [
            { id: 'terminos de servicio', texto: "Términos de servicio", url: "/terminos-y-servicios" },
            { id: 'politica de privacidad', texto: "Política de Privacidad", url: "/politicas-de-privacidad" },
            { id: 'cookies', texto: "Cookies", url: "/politicas-de-cookies" }
        ]
    }
};