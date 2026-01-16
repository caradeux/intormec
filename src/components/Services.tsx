import React from 'react';
import { Building2, Home, Hammer, Wrench, Car, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Obras Civiles Menores',
    description: 'Especialistas en obras civiles menores, limpieza de terrenos y preparación de sitios. Trabajos eficientes con maquinaria especializada.',
    features: ['Limpieza de terrenos', 'Movimiento de tierra', 'Preparación de sitios'],
    highlight: true
  },
  {
    icon: Home,
    title: 'Terminación y Acabado',
    description: 'Terminación y acabado de edificios con los más altos estándares de calidad. Reparación de techumbres e interiores.',
    features: ['Acabado de edificios', 'Reparación de techumbres', 'Reparación de interiores'],
    highlight: true
  },
  {
    icon: Hammer,
    title: 'Productos Metálicos',
    description: 'Fabricación de productos metálicos para uso estructural. Soldaduras especializadas y trabajos de alta precisión.',
    features: ['Estructuras metálicas', 'Soldadura MIG/TIG', 'Trabajos a medida'],
    highlight: true
  },
  {
    icon: Car,
    title: 'Mantención de Vehículos',
    description: 'Mantenimiento y reparación de vehículos automotores. Servicio integral con diagnóstico computarizado y repuestos de calidad.',
    features: ['Mantenimiento preventivo', 'Reparación de motores', 'Diagnóstico computarizado'],
    highlight: true
  },
  {
    icon: Wrench,
    title: 'Maestranza',
    description: 'Servicios de maestranza industrial. Reparación y mantenimiento de maquinaria y equipos con tecnología de punta.',
    features: ['Reparación de equipos', 'Mantenimiento industrial', 'Trabajos especializados']
  },
  {
    icon: Sparkles,
    title: 'Servicios Especializados',
    description: 'Arenado, tornería y otros servicios especializados. Soluciones integrales para la industria y construcción.',
    features: ['Arenado industrial', 'Tornería CNC', 'Servicios a medida']
  }
];

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = React.useState<boolean[]>(new Array(services.length).fill(false));

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.service-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="py-20 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 animate-slideInUp">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            Especialistas en obras civiles menores, construcción y servicios metalmecánicos. Más de 10 años de experiencia en la región.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card bg-gradient-to-br from-gray-50 to-white border rounded-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer hover-lift shine-effect ${
                  service.highlight ? 'border-orange-300 bg-gradient-to-br from-orange-50 to-white' : 'border-gray-200'
                } ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    DESTACADO
                  </div>
                )}
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="text-orange-600 group-hover:text-white transition-colors" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 transform transition-transform duration-300 group-hover:translate-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Indicador de hover */}
                <div className="mt-6 text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  <span className="mr-2">Más información</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
