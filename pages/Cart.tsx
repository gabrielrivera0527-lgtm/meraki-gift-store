
import React from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 animate-in slide-in-from-bottom duration-500">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-3xl font-outfit font-bold text-slate-900 dark:text-white">Tu Carrito</h1>
            <span className="bg-pink-100 dark:bg-pink-900/30 text-primary px-3 py-1 rounded-full text-sm font-semibold">3 Productos</span>
          </div>

          <div className="space-y-6">
            {[
              { name: 'Taza de Cerámica Personalizada', detail: 'Diseño: Flores Acuarela + Nombre', price: 12.50, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBovwseIZ9TqLiRd6IqCHRRsflrzmBB-WOUhOiqOITCQo-1_EuxwhwHX9n-tYVBoMC66qDvQDgr5anD3YkDCdTL8SuhQhUxxctlZkEePQpGjftywn3FlP98loUW1f2IGXIhjV-7wWqEDqEirfRp1WBmEWPH_srX334jUPFU35x_qUslBzvCih3PlDGyp71JyBNXI2-ifuqMNlPEYVgPNa_u2ezRBH65n08Ov8YA1p7fGwx614ZDAYd-uUEFM2-8Bk_JA7WoRloP3UE', qty: 1 },
              { name: 'Cojín Sublimado Premium', detail: 'Tamaño: 40x40cm | Foto Familiar', price: 19.00, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjZzPNlUb2GsYfaW7FNsdFu5t8MiJ_d-tFsLzviNrZLZfldaEchdeZOmn_EIN_syK4nO_O4S6g2235Lbx9gf8WuVf8AB20twZARALv3kU9gkQgSv9s0yIkmMqyQS_viWBJHMW03IhqVF55COQNq__d9lvLS4bcUQ16_1RmXTuf_p3imGtrVI9haAUlPMw84L1ELevEm9VE2VZN-dw6FqfraTmams5L4kICSw9Qf8jh_qg4W-AKlqlN9QIvXFnKPCIXt3simr0bQAs', qty: 2 },
              { name: 'Botella de Aluminio 750ml', detail: 'Color: Blanco | Logo Empresa', price: 15.90, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN7QEHgPuonzU-wcTTUF-dyeIMKWMNY0Rsy1Tw2-ktmqeI_voIBbOkAmgDiwjLwjLICKf5Ob68ad60wp7_EOiWt93NdFyFz9siOvLMFDoq4o3L7be2WEGfpc--jnQBiIkJppz88v-xszuD2rOH0FPpQhdr2t87wVBOIndUUdrqXeguvuuyrZHsMjkzrqTEx8ps4m_EC8oiH3P495uqJfL-9sNRZ0BEdz6X57uLx8053x7NxetiM1XQvYtXNIR9fIGSDFTitTA1uO8', qty: 1 }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-sm border border-slate-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-pink-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <img alt={item.name} className="w-full h-full object-cover" src={item.img} />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white font-outfit">{item.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{item.detail}</p>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <span className="material-icons-round">delete</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-full p-1">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-icons-round text-sm">remove</span>
                      </button>
                      <span className="px-4 font-semibold">{item.qty}</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-icons-round text-sm">add</span>
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">${(item.price * item.qty).toFixed(2)}</p>
                      {item.qty > 1 && <p className="text-xs text-slate-400 dark:text-slate-500">${item.price.toFixed(2)} c/u</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/catalogo" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold">
              <span className="material-icons-round">arrow_back</span>
              Seguir comprando
            </Link>
          </div>
        </div>

        <div className="lg:w-[400px]">
          <div className="sticky top-28 bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 shadow-2xl shadow-pink-100/50 dark:shadow-none border border-pink-50 dark:border-zinc-800">
            <h2 className="text-2xl font-bold font-outfit mb-6 text-slate-900 dark:text-white">Resumen de Compra</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal (4 items)</span>
                <span>$66.40</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Costo de envío</span>
                <span className="text-green-500 font-medium">Gratis</span>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end">
                <span className="text-lg font-bold text-slate-900 dark:text-white font-outfit">Total</span>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary font-outfit">$66.40</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">IVA incluido</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Código promocional</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-grow bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-primary rounded-xl px-4 py-3 text-sm"
                  placeholder="Ingresa tu código"
                />
                <button className="bg-slate-800 dark:bg-zinc-700 text-white px-4 py-3 rounded-xl hover:bg-black dark:hover:bg-slate-600 transition-colors">Aplicar</button>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Finalizar Compra
              <span className="material-icons-round">payments</span>
            </button>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-8">
              <div className="flex flex-col items-center text-center">
                <span className="material-icons-round text-primary mb-1">verified_user</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Pago Seguro</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-icons-round text-primary mb-1">local_shipping</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Envío Rápido</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-icons-round text-primary mb-1">redeem</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Ideal para Regalo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
