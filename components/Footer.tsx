import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-slate-100 dark:border-zinc-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-heading font-bold text-2xl text-primary mb-4 block">
              Meraki
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Regalos personalizados con amor y dedicación. Hacemos realidad tus ideas.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/merakigiftstore_sv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-5 h-5 filter grayscale hover:grayscale-0" />
              </a>
              <a href="https://tiktok.com/@merakigiftstore_sv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-black hover:text-white transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg" alt="TikTok" className="w-5 h-5 filter grayscale hover:grayscale-0" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/catalogo" className="hover:text-primary transition-colors">Catálogo</Link></li>
              <li><Link to="/personalizar/new" className="hover:text-primary transition-colors">Personalizar</Link></li>
              <li><Link to="/galeria" className="hover:text-primary transition-colors">Galería</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Ayuda</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><Link to="/como-ordenar" className="hover:text-primary transition-colors">Cómo ordenar</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Contacto</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary">whatsapp</span>
                <a href="https://wa.me/50374446720" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+503 7444 6720</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary">location_on</span>
                <span>El Salvador, San Salvador</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Meraki Gift Store. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
