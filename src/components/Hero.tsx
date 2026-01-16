import React from 'react';
import { Wrench, ArrowDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-6">
            <Wrench className="text-orange-500" size={48} />
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                INTORMEC
              </h1>
              <p className="text-xl text-gray-300">Soluciones Metalmecánicas</p>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-light mb-6 text-gray-200">
            Trabajos de soldadura, maestranza y tornería en Puchuncaví, Región de Valparaíso
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Desde 2013 ofrecemos servicios especializados en trabajos metalmecánicos con profesionales altamente calificados y tecnología de punta. Comprometidos con la calidad, innovación y satisfacción del cliente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('servicios')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
            >
              Ver Servicios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              Contactar
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('servicios')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-orange-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
