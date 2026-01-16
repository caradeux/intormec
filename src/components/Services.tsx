import React from 'react';
import { Hammer, Cog, Zap, Settings, Wrench, Package, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Maestranza',
    description: 'Fabricación, reparación y mantenimiento de estructuras metálicas. Soldaduras especializadas y trabajos de alta precisión para la industria.',
    features: ['Soldadura MIG/TIG', 'Estructuras metálicas', 'Trabajos a medida']
  },
  {
    icon: Cog,
    title: 'Mecánica',
    description: 'Servicios mecánicos integrales para maquinaria industrial y vehículos. Diagnóstico, reparación y mantenimiento preventivo.',
    features: ['Diagnóstico computarizado', 'Reparación de motores', 'Mantenimiento preventivo']
  },
  {
    icon: Zap,
    title: 'Arenado',
    description: 'Limpieza y preparación de superficies mediante arenado abrasivo. Eliminación de óxido, pintura y contaminantes para acabados perfectos.',
    features: ['Arenado de acero', 'Preparación de superficies', 'Limpieza industrial']
  },
  {
    icon: Settings,
    title: 'Tornería',
    description: 'Mecanizado de precisión en torno. Fabricación de piezas cilíndricas, ejes, poleas y componentes mecánicos a medida.',
    features: ['Tornería CNC', 'Piezas a medida', 'Alta precisión']
  },
  {
    icon: Wrench,
    title: 'Mantención',
    description: 'Programas de mantenimiento preventivo y correctivo para maquinaria industrial. Prolongamos la vida útil de sus equipos.',
    features: ['Mantenimiento programado', 'Diagnóstico predictivo', 'Reparaciones urgentes']
  },
  {
    icon: Package,
    title: 'Repuestos',
    description: 'Comercialización de repuestos automotores e industriales de calidad. Stock permanente de las principales marcas.',
    features: ['Repuestos originales', 'Stock permanente', 'Asesoría técnica']
  },
  {
    icon: GraduationCap,
    title: 'Capacitaciones',
    description: 'Programas de capacitación técnica en soldadura, mecánica y operación de equipos. Formación certificada para su personal.',
    features: ['Cursos certificados', 'Práctica supervisada', 'Material incluido']
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales en metalmecánica con más de 10 años de experiencia. Calidad, innovación y compromiso en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Icon className="text-orange-600 group-hover:text-white transition-colors" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
