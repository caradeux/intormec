import React from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-orange-500 font-semibold">INTORMEC S.p.A.</span> nace en 2013 como respuesta a la creciente demanda de servicios metalmecánicos de calidad en la Región de Valparaíso. Desde nuestros inicios en Puchuncaví, nos hemos consolidado como un referente en trabajos de soldadura, tornería y mantención industrial.
              </p>

              <p>
                Contamos con un equipo de profesionales altamente calificados de la zona, maquinaria moderna y las mejores prácticas de la industria. Nuestro compromiso es brindar soluciones eficientes que superen las expectativas de nuestros clientes.
              </p>

              <p>
                Operamos con total independencia comercial, sin exclusividades de marca, lo que nos permite ofrecer las mejores alternativas para cada proyecto específico.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Nuestra Visión</h3>
              <p className="text-gray-400">
                Ser una empresa líder en comercialización de productos y reparaciones metalmecánicas, satisfaciendo necesidades con calidad superior.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Orientación al Cliente</h3>
              <p className="text-gray-400">
                Ponemos al cliente en el centro de nuestras operaciones, comprendiendo sus necesidades y superando sus expectativas.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Mejora Continua</h3>
              <p className="text-gray-400">
                Invertimos constantemente en tecnología y capacitación para mantener los más altos estándares de calidad.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-500 transition">
              <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovación</h3>
              <p className="text-gray-400">
                Adoptamos nuevas tecnologías y metodologías para ofrecer soluciones más eficientes e innovadoras.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">10+</div>
            <div className="text-gray-400">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-400">Proyectos Completados</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">100+</div>
            <div className="text-gray-400">Clientes Satisfechos</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-400">Soporte Disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
