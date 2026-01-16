import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wrench, Sparkles, ArrowDown } from 'lucide-react';

interface HeroSliderProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Selección de imágenes destacadas para el slider
  const slides = [
    {
      image: '/src/imagenes/IMG-20260113-WA0001.jpg',
      title: 'Obras Civiles Menores',
      subtitle: 'Limpieza de terrenos y preparación de sitios',
      category: 'Obras Civiles'
    },
    {
      image: '/src/imagenes/IMG-20260113-WA0010.jpg',
      title: 'Terminación de Edificios',
      subtitle: 'Acabados profesionales y reparación de techumbres',
      category: 'Construcción'
    },
    {
      image: '/src/imagenes/IMG-20260113-WA0020.jpg',
      title: 'Productos Metálicos',
      subtitle: 'Fabricación de estructuras metálicas a medida',
      category: 'Metalmecánica'
    },
    {
      image: '/src/imagenes/IMG-20260113-WA0030.jpg',
      title: 'Mantenimiento de Vehículos',
      subtitle: 'Servicio integral automotriz',
      category: 'Automotriz'
    },
    {
      image: '/src/imagenes/IMG-20260113-WA0040.jpg',
      title: 'Maestranza Industrial',
      subtitle: 'Reparación y mantenimiento de equipos',
      category: 'Industrial'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      id="inicio" 
      className="relative bg-slate-900 text-white min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider de imágenes */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
          </div>
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo y título */}
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

          {/* Información del slide actual */}
          <div className="mb-6 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {slides[currentSlide].category}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl text-gray-300">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-slideInUp" style={{ animationDelay: '0.4s' }}>
            Desde 2013 especializados en obras civiles menores, terminación de edificios, limpieza de terrenos y fabricación de productos metálicos en Puchuncaví, Región de Valparaíso.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slideInUp" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => scrollToSection('servicios')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shine-effect"
            >
              Ver Servicios
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ver Proyectos
            </button>
            <a
              href="tel:+56989927030"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
            >
              Llamar Ahora
            </a>
          </div>

          {/* Indicadores de slides */}
          <div className="flex space-x-3 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 bg-orange-500' 
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Controles del slider */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Slide siguiente"
        >
          <ChevronRight size={32} />
        </button>

        {/* Flecha de scroll */}
        <button
          onClick={() => scrollToSection('servicios')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-orange-400 transition-colors"
        >
          <ArrowDown size={32} className="text-orange-500" />
        </button>
      </div>

      {/* Contador de slides */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm z-20">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};

export default HeroSlider;
