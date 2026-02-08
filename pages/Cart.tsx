
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total, generateWhatsAppLink } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-12 bg-background-light dark:bg-background-dark transition-colors">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <span className="material-icons-round text-5xl">shopping_bag</span>
          </div>
          <h1 className="font-heading text-3xl font-bold mb-4 dark:text-white">Tu carrito está vacío</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
            ¡Es hora de crear algo único! Explora nuestro catálogo o personaliza tu propio regalo.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/catalogo" className="px-6 py-3 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl font-bold hover:shadow-md transition-all dark:text-white">
              Ver Catálogo
            </Link>
            <Link to="/personalizar/new" className="px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-pink-200 dark:shadow-none hover:bg-pink-600 transition-all">
              Crear Diseño
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background-light dark:bg-background-dark transition-colors">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl font-bold mb-8 dark:text-white">Tu Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm flex gap-4 items-center">
                {/* Image */}
                <div className="w-20 h-20 bg-slate-50 dark:bg-zinc-800 rounded-xl flex-shrink-0 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                  {item.isCustom && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold">
                      CUSTOM
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-800 dark:text-white">{item.name}</h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    ${item.price.toFixed(2)} c/u
                  </div>
                  {item.isCustom && item.customDetails && (
                    <div className="text-xs text-primary bg-pink-50 dark:bg-pink-900/20 px-2 py-1 rounded inline-block">
                      Diseño: {item.customDetails.uploadedImageName}
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-3 bg-slate-50 dark:bg-zinc-800 rounded-lg px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-primary transition-colors disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <span className="material-icons-round text-sm">remove</span>
                    </button>
                    <span className="font-bold text-sm w-4 text-center dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-primary transition-colors"
                    >
                      <span className="material-icons-round text-sm">add</span>
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-red-500 hover:text-red-600 underline"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm sticky top-24">
              <h3 className="font-bold text-xl mb-6 dark:text-white">Resumen del Pedido</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Envío</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Por cotizar</span>
                </div>
                <div className="border-t border-slate-100 dark:border-zinc-800 pt-3 flex justify-between font-bold text-xl text-primary">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold shadow-lg shadow-green-100 dark:shadow-none transition-all flex items-center justify-center gap-2 mb-3"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-6 h-6 brightness-0 invert" />
                Completar Pedido en WhatsApp
              </a>

              <p className="text-xs text-center text-slate-400">
                Al hacer clic, se abrirá WhatsApp con el detalle de tu pedido listo para enviar.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
