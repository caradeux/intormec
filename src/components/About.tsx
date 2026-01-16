import React from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('nosotros');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-orange-500 font-semibold">INTORMEC S.p.A.</span> nace en 2013 como respuesta a la creciente demanda de servicios de obras civiles y construcción en la Región de Valparaíso. Desde nuestros inicios en Puchuncaví, nos hemos consolidado como un referente en obras civiles menores, terminación de edificios y servicios metalmecánicos.
              </p>

              <p>
                Nuestro enfoque principal está en <span className="text-orange-400 font-semibold">obras civiles menores</span>, incluyendo limpieza de terrenos, terminación y acabado de edificios, reparación de techumbres e interiores, y fabricación de productos metálicos estructurales. También ofrecemos mantenimiento y reparación de vehículos automotores.
              </p>

              <p>
                Contamos con un equipo de profesionales altamente calificados de la zona, maquinaria moderna y las mejores prácticas de la industria. Nuestro compromiso es brindar soluciones eficientes que superen las expectativas de nuestros clientes.
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Nuestra Visión</h3>
              <p className="text-gray-400">
                Ser una empresa líder en obras civiles menores y construcción, satisfaciendo necesidades con calidad superior y compromiso con nuestros clientes.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Orientación al Cliente</h3>
              <p className="text-gray-400">
                Ponemos al cliente en el centro de nuestras operaciones, comprendiendo sus necesidades y superando sus expectativas.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Mejora Continua</h3>
              <p className="text-gray-400">
                Invertimos constantemente en tecnología y capacitación para mantener los más altos estándares de calidad.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovación</h3>
              <p className="text-gray-400">
                Adoptamos nuevas tecnologías y metodologías para ofrecer soluciones más eficientes e innovadoras.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group cursor-pointer">
            <div className="text-5xl font-bold text-orange-500 mb-2 group-hover:scale-125 transition-transform duration-300">10+</div>
            <div className="text-gray-400 group-hover:text-white transition-colors">Años de Experiencia</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-5xl font-bold text-orange-500 mb-2 group-hover:scale-125 transition-transform duration-300">800+</div>
            <div className="text-gray-400 group-hover:text-white transition-colors">Proyectos Completados</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-5xl font-bold text-orange-500 mb-2 group-hover:scale-125 transition-transform duration-300">150+</div>
            <div className="text-gray-400 group-hover:text-white transition-colors">Clientes Satisfechos</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-5xl font-bold text-orange-500 mb-2 group-hover:scale-125 transition-transform duration-300">24/7</div>
            <div className="text-gray-400 group-hover:text-white transition-colors">Soporte Disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
