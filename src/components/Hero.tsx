import React, { useState, useEffect } from 'react';
import { Wrench, ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Fondo con parallax */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center space-x-3 mb-6 animate-slideInLeft">
            <div className="relative">
              <Wrench className="text-orange-500 animate-float" size={48} />
              <Sparkles className="absolute -top-2 -right-2 text-yellow-400" size={20} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient">
                INTORMEC
              </h1>
              <p className="text-xl text-gray-300">Obras Civiles y Construcción</p>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-light mb-6 text-gray-200 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            Obras civiles menores, construcción y servicios metalmecánicos en Puchuncaví, Región de Valparaíso
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-slideInUp" style={{ animationDelay: '0.4s' }}>
            Desde 2013 especializados en obras civiles menores, terminación de edificios, limpieza de terrenos y fabricación de productos metálicos. Comprometidos con la calidad y satisfacción del cliente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slideInUp" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('servicios')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shine-effect"
            >
              Ver Servicios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('servicios')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-orange-400 transition-colors"
        >
          <ArrowDown size={32} className="text-orange-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
