
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['Todos', 'Tazas', 'Camisetas', 'Gorras', 'Marcos de fotos', 'Otros'];

const Catalog: React.FC = () => {
  const { products, loading } = useContext(DataContext);
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: any) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      isCustom: false
    });
    // Optional: Add toast notification here
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
          Catálogo de Productos
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
          Elige un producto de nuestro catálogo listo para regalar, o personalízalo a tu gusto.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 custom-scrollbar whitespace-nowrap">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${activeCategory === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white dark:bg-card-dark text-slate-600 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-zinc-800 border border-slate-100 dark:border-zinc-800'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative min-w-[280px]">
          <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border-slate-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 dark:text-white focus:ring-primary focus:border-primary"
            placeholder="Buscar..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-zinc-800 flex flex-col">
            <div className="relative overflow-hidden aspect-square">
              <img alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={product.image} />
              {product.isBestSeller && (
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center">
                  <span className="material-symbols-rounded text-[14px] mr-1">star</span> Best Seller
                </div>
              )}
              <button
                onClick={() => handleAddToCart(product)}
                className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/40 backdrop-blur-sm rounded-full text-slate-600 dark:text-white hover:text-primary transition-colors transform active:scale-90"
                title="Añadir a lista de deseos"
              >
                <span className="material-symbols-rounded">favorite</span>
              </button>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{product.category}</span>
              <h3 className="font-heading text-lg font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">{product.name}</h3>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-slate-900 dark:text-white mb-4">${product.price.toFixed(2)}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-800 dark:text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center"
                    title="Agregar al carrito"
                  >
                    <span className="material-symbols-rounded">add_shopping_cart</span>
                  </button>
                  <Link to={`/personalizar/${product.id}`} className="flex-[3] bg-primary hover:bg-pink-700 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center space-x-2">
                    <span className="material-symbols-rounded">edit</span>
                    <span>Personalizar</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
          Ver más productos
        </button>
      </div>
    </main>
  );
};

export default Catalog;
