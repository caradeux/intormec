import React from 'react';
import { Phone, Mail, MapPin, Wrench } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="text-orange-500" size={32} />
              <div>
                <h3 className="text-xl font-bold text-orange-500">INTORMEC</h3>
                <p className="text-xs text-gray-400">S.p.A.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Soluciones metalmecánicas de calidad desde 2013. Comprometidos con la excelencia y la satisfacción del cliente.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Maestranza</li>
              <li>Mecánica</li>
              <li>Arenado</li>
              <li>Tornería</li>
              <li>Mantención</li>
              <li>Repuestos</li>
              <li>Capacitaciones</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="text-orange-500 mt-1" size={18} />
                <div>
                  <a href="tel:+56989927030" className="text-gray-400 hover:text-orange-500 transition block">
                    +56 9 8992 7030
                  </a>
                  <a href="tel:+56989066778" className="text-gray-400 hover:text-orange-500 transition block">
                    +56 9 8906 6778
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="text-orange-500 mt-1" size={18} />
                <a href="mailto:contacto@intormec.cl" className="text-gray-400 hover:text-orange-500 transition">
                  contacto@intormec.cl
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="text-orange-500 mt-1" size={18} />
                <span className="text-gray-400">
                  Puchuncaví, Región de Valparaíso
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} INTORMEC S.p.A. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
