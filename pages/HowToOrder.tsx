
import React from 'react';
import { Link } from 'react-router-dom';

const HowToOrder: React.FC = () => {
  return (
    <main className="animate-in fade-in duration-500">
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-200/30 dark:bg-rose-900/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-rose-300/20 dark:bg-rose-900/10 rounded-full blur-3xl -z-10"></div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Cómo crear tu regalo <span className="text-primary">perfecto</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-outfit">
            Personalizar tus momentos especiales es más fácil de lo que imaginas. Sigue estos 4 pasos para darle vida a tus ideas.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'Elige tu producto', desc: 'Explora nuestro catálogo y selecciona la base ideal: tazas, termos, playeras o rompecabezas.', icon: 'shopping_cart_checkout' },
              { id: '02', title: 'Envía tu diseño', desc: 'Sube tu foto favorita o dinos qué frase quieres. Nuestro equipo te ayudará con el ajuste perfecto.', icon: 'edit_note', offset: true },
              { id: '03', title: 'Sublimación', desc: 'Usamos calor y presión para que tu imagen se funda con el producto. Colores vibrantes.', icon: 'auto_fix_high' },
              { id: '04', title: 'Recibe y ama', desc: 'Empacamos con amor y enviamos hasta tu puerta. ¡Listo para sorprender!', icon: 'local_shipping', offset: true }
            ].map((step, idx) => (
              <div key={idx} className={`group bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-50 dark:border-zinc-800 relative ${step.offset ? 'md:mt-8 lg:mt-0' : ''}`}>
                <span className="absolute -top-6 -left-2 font-display text-7xl font-bold text-rose-100 dark:text-zinc-800 -z-0 select-none group-hover:text-rose-200 dark:group-hover:text-zinc-700 transition-colors">{step.id}</span>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-4xl">{step.icon}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 dark:text-white">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-outfit">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-rose-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                alt="Proceso de sublimación"
                className="rounded-[2.5rem] shadow-2xl object-cover aspect-square md:aspect-video"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqA7Juk-bZZfj89MnZzwjjkHqcFHG9LfBR9zjwVWp40Drfc36zTEG5IdTlIdNjUQf9KBL5sN6HpboPbeIXzyDcQ-5AYRgr5PcMQ2J_fcA9h1OEgeMMPHVSP11O7hFv-kPZdpgAUsTylJ6EvjEqV6YQ1HQ77SE05mj0XuqSmT7oHzoD_DFKMWdYHhBbubZ2CImCG0IpFVPh3ePI53oXRig_3WZkv2KbPdo0cMt2DJuq7YjTpJUz3jO_MSfggXd3lG3XN_1z-lpZ0PU"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">¿Por qué elegir Meraki?</h2>
              <ul className="space-y-4">
                {[
                  { title: 'Calidad Premium', desc: 'Tintas originales y materiales de grado A+ para mayor durabilidad.' },
                  { title: 'Atención Personalizada', desc: 'Revisamos cada diseño antes de imprimir para asegurar el mejor resultado.' },
                  { title: 'Envíos Seguros', desc: 'Protección extra en cada paquete para que llegue impecable.' }
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-primary p-1 rounded-full text-white">
                      <span className="material-symbols-rounded text-sm">check</span>
                    </div>
                    <div>
                      <h4 className="font-bold font-outfit dark:text-white">{reason.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm font-outfit">{reason.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link to="/catalogo" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 w-fit">
                  Ver Catálogo Completo
                  <span className="material-symbols-rounded">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-rose-500 to-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
              <span className="material-symbols-rounded text-[150px]">favorite</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">¿Listo para crear algo único?</h2>
            <p className="text-rose-100 text-lg md:text-xl mb-10 max-w-xl mx-auto font-outfit">
              Cualquier duda que tengas, estamos aquí para ayudarte por WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalogo" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-colors">
                Ir a la Tienda
              </Link>
              <a href="https://wa.me/50374446720" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-rounded text-xl">chat</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowToOrder;
