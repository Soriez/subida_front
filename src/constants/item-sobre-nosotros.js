import { Heart, Shield, Users, Lightbulb } from 'lucide-react';

export const sobre_nosotros_data = {
  valoresData: [
    {
      id: 1,
      icon: Heart,
      titulo: 'Pasión por la tecnología',
      descripcion: 'Amamos lo que hacemos y nos impulsa conectar a las personas correctas con los proyectos correctos.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 2,
      icon: Shield,
      titulo: 'Confianza y transparencia',
      descripcion: 'Construimos relaciones sólidas basadas en la honestidad y la comunicación clara.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      icon: Users,
      titulo: 'Comunidad colaborativa',
      descripcion: 'Fomentamos un ecosistema donde freelancers y empresas crecen juntos.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 4,
      icon: Lightbulb,
      titulo: 'Innovación constante',
      descripcion: 'Nos adaptamos a las nuevas tecnologías y tendencias para ofrecer la mejor experiencia.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ],

  /**
   * Datos del equipo
   * Cada miembro tiene nombre, rol e imagen
   */
  equipoData: [
    {
      id: 1,
      nombre: 'Jezabel Coronas',
      rol: 'Analista Funcional',
      imagen: '/imgs/sobre-nosotros/Jezabel_Coronas.jpeg',
      imagePosition: '50% 25%'
    },
    {
      id: 2,
      nombre: 'Santiago Oriez',
      rol: 'QA/Tester',
      imagen: '/imgs/sobre-nosotros/Santiago_Oriez.jpg',
      imagePosition: '50% 0%'
    },
    {
      id: 3,
      nombre: 'Priscila Redondo',
      rol: 'Scrum Master',
      imagen: '/imgs/sobre-nosotros/Priscila_Redondo.jpeg',
      imagePosition: '50% 55%'
    },
    {
      id: 4,
      nombre: 'Leonel Rasjido',
      rol: 'Desarrollador',
      imagen: '/imgs/sobre-nosotros/Leonel_Rasjido.jpeg',
      imagePosition: '50% 35%'
    }
  ]
}