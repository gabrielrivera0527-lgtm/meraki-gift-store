
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass-nav bg-white/70 dark:bg-background-dark/70 border-b border-pink-100 dark:border-pink-900/30 transition-colors">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            alt="Meraki Gift Store Logo"
            className="h-10 w-auto rounded-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBojAt1IOOzjyaXxap63weixd8qorkQCaalR6W3X64RwAdjwCo9n1TkcTEnxcZxnNx-Uyokn4dIUen0vumZ56556VkRd1HeYAlVRT4meafAFykwGf6TjIFMOzzobVUJVwROdFwtP0xtgVMBceu-vM43lt1kOWsK_4cSovK9tn7TBgZ-eEBo6BiSh0KaI8ytN56X8D5fuY-coGCgBCpR6TxVFRIbzjfiDL9vC6aO2notlkfFik9_zV9o-xDPkBqKqVqNEq7i_gEY14w"
          />
          <span className="font-display text-xl font-bold text-primary hidden sm:block uppercase tracking-wider">Meraki</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className={`transition-colors ${isActive('/') ? 'text-primary font-bold' : 'hover:text-primary text-slate-600 dark:text-slate-300'}`}>Inicio</Link>
          <Link to="/catalogo" className={`transition-colors ${isActive('/catalogo') ? 'text-primary font-bold' : 'hover:text-primary text-slate-600 dark:text-slate-300'}`}>Productos</Link>
          <Link to="/como-ordenar" className={`transition-colors ${isActive('/como-ordenar') ? 'text-primary font-bold' : 'hover:text-primary text-slate-600 dark:text-slate-300'}`}>Cómo Ordenar</Link>
          <Link to="/galeria" className={`transition-colors ${isActive('/galeria') ? 'text-primary font-bold' : 'hover:text-primary text-slate-600 dark:text-slate-300'}`}>Galería</Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors"
          >
            <span className="material-icons-round text-primary">dark_mode</span>
          </button>
          <Link to="/carrito" className="p-2 relative rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors">
            <span className="material-icons-round text-primary">shopping_bag</span>
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors"
          >
            <span className="material-icons-round text-primary">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-t border-pink-100 dark:border-pink-900/30 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className={`py-2 ${isActive('/') ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300'}`}>Inicio</Link>
          <Link to="/catalogo" onClick={() => setIsMenuOpen(false)} className={`py-2 ${isActive('/catalogo') ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300'}`}>Productos</Link>
          <Link to="/como-ordenar" onClick={() => setIsMenuOpen(false)} className={`py-2 ${isActive('/como-ordenar') ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300'}`}>Cómo Ordenar</Link>
          <Link to="/galeria" onClick={() => setIsMenuOpen(false)} className={`py-2 ${isActive('/galeria') ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300'}`}>Galería</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
