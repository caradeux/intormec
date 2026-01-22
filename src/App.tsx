import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import HeroSlider from './components/HeroSlider';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-slate-900 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-500">INTORMEC</h1>
              <span className="ml-2 text-sm text-gray-300">S.p.A.</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-orange-500 transition">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="hover:text-orange-500 transition">
                Servicios
              </button>
              <button onClick={() => scrollToSection('galeria')} className="hover:text-orange-500 transition">
                Galería
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="hover:text-orange-500 transition">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className="hover:text-orange-500 transition">
                Contacto
              </button>
              <a href="tel:+56989927030" className="flex items-center space-x-2 bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700 transition">
                <Phone size={18} />
                <span>Llamar</span>
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-2 hover:bg-slate-700 rounded transition"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left px-4 py-2 hover:bg-slate-700 rounded transition"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="block w-full text-left px-4 py-2 hover:bg-slate-700 rounded transition"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="block w-full text-left px-4 py-2 hover:bg-slate-700 rounded transition"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-4 py-2 hover:bg-slate-700 rounded transition"
              >
                Contacto
              </button>
              <a
                href="tel:+56989927030"
                className="flex items-center space-x-2 px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition"
              >
                <Phone size={18} />
                <span>Llamar</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        <HeroSlider scrollToSection={scrollToSection} />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>

      <Footer scrollToSection={scrollToSection} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
