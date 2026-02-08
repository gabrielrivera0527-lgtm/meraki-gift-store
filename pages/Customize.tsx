
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const Customize: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading } = useContext(DataContext);

  if (loading) {
    return <div className="text-center py-20">Cargando personalizador...</div>;
  }

  const product = products.find(p => p.id === id) || products[0];

  if (!product) {
    return <div className="text-center py-20">Producto no encontrado</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 animate-in fade-in zoom-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="relative aspect-square rounded-[2rem] bg-white dark:bg-zinc-900 border-2 border-rose-100 dark:border-zinc-800 overflow-hidden flex items-center justify-center shadow-2xl shadow-rose-200/20 dark:shadow-none">
            <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border border-rose-100 dark:border-zinc-700">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Vista 3D en tiempo real
            </div>
            <div className="relative w-3/4 h-3/4 flex items-center justify-center">
              <img
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal rounded-xl opacity-90"
                src={product.image}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-[1px]">
                  <span className="material-icons-round text-primary/40 text-4xl">add_photo_alternate</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              <button className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-rose-50 dark:border-zinc-700 hover:scale-110 transition-transform">
                <span className="material-icons-round">3d_rotation</span>
              </button>
              <button className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-rose-50 dark:border-zinc-700 hover:scale-110 transition-transform">
                <span className="material-icons-round">zoom_in</span>
              </button>
              <button className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-rose-50 dark:border-zinc-700 hover:scale-110 transition-transform">
                <span className="material-icons-round">cameraswitch</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-display font-bold">{product.name}</h2>
            <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-display font-bold mb-2">Personaliza tu regalo</h1>
            <p className="text-slate-500 dark:text-slate-400">Sube tu diseño en formato PNG para obtener los mejores resultados de sublimación.</p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-semibold mb-2">Paso 1: Sube tu imagen</label>
            <div className="border-2 border-dashed border-rose-200 dark:border-zinc-700 rounded-[2rem] p-8 text-center hover:border-primary transition-colors cursor-pointer bg-white/50 dark:bg-zinc-800/30">
              <input type="file" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="flex flex-col items-center gap-3 cursor-pointer">
                <div className="w-16 h-16 bg-rose-50 dark:bg-rose-950/30 rounded-full flex items-center justify-center text-primary">
                  <span className="material-icons-round text-3xl">cloud_upload</span>
                </div>
                <div>
                  <p className="font-medium">Haz clic o arrastra tu archivo aquí</p>
                  <p className="text-xs text-slate-400 mt-1">PNG, JPG (Máx. 10MB)</p>
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-rose-100 dark:border-zinc-800">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <span className="material-icons-round text-primary text-sm">open_with</span>
                  Posición y Tamaño
                </label>
                <button className="text-primary text-xs font-semibold hover:underline">Resetear</button>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span>Escala</span>
                    <span>100%</span>
                  </div>
                  <input type="range" className="w-full h-2 bg-rose-100 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-primary" />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-zinc-800 p-3 rounded-2xl w-fit">
                    <div></div>
                    <button className="p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-lg shadow-sm transition-all"><span className="material-icons-round">keyboard_arrow_up</span></button>
                    <div></div>
                    <button className="p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-lg shadow-sm transition-all"><span className="material-icons-round">keyboard_arrow_left</span></button>
                    <button className="p-2 bg-primary text-white rounded-lg shadow-sm"><span className="material-icons-round">center_focus_strong</span></button>
                    <button className="p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-lg shadow-sm transition-all"><span className="material-icons-round">keyboard_arrow_right</span></button>
                    <div></div>
                    <button className="p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-lg shadow-sm transition-all"><span className="material-icons-round">keyboard_arrow_down</span></button>
                    <div></div>
                  </div>
                  <div className="flex-1 w-full space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 mb-2">
                        <span>Rotación</span>
                        <span>0°</span>
                      </div>
                      <input type="range" className="w-full h-2 bg-rose-100 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-primary" />
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 px-3 bg-slate-50 dark:bg-zinc-800 rounded-xl text-xs font-medium flex items-center justify-center gap-2">
                        <span className="material-icons-round text-sm">flip</span> Voltear
                      </button>
                      <button className="flex-1 py-2 px-3 bg-slate-50 dark:bg-zinc-800 rounded-xl text-xs font-medium flex items-center justify-center gap-2">
                        <span className="material-icons-round text-sm">layers</span> Capas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/carrito" className="flex-[2] bg-primary hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-rose-200 dark:shadow-none transition-all flex items-center justify-center gap-3">
              <span className="material-icons-round">shopping_cart</span>
              Añadir al carrito
            </Link>
            <button className="group relative flex-1 bg-white dark:bg-zinc-800 border-2 border-rose-100 dark:border-zinc-700 hover:border-primary dark:hover:border-primary font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2">
              <span className="material-icons-round text-primary">help_outline</span>
              Ayuda
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-slate-900 text-white text-xs font-normal rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl">
                <p className="mb-2 font-bold">Ayuda para principiantes</p>
                Usa archivos .png con fondo transparente para que el color del producto se vea natural. ¡Evita poner texto muy cerca de los bordes!
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></div>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-2xl">
            <span className="material-icons-round text-blue-500">info</span>
            <p className="text-xs text-blue-700 dark:text-blue-300">Producción estimada: 24-48 horas. Envío gratis en pedidos superiores a $50.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Customize;
