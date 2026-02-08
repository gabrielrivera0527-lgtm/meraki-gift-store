
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                alt="Meraki Logo"
                className="h-12 w-auto brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDALpSSjQx3YjJ9Jd92HYjwwAY29tNVmrZEAvjXCIT9IcKdYBOZ4LeeOg-Sq4Ct9elrf_w7gdBJt3grA25rBRs2sTzHqNKqImKrHpxJ8ilV8CzOtB_-bYiZRN4qp6Jteb83O5RMWBBLP_E2piaWJEcKxh_Dr6Hpz8Kp7a39gSEJ3Fs9fBwxYuqDVRM3UTr6l7nF1S5sv4QpmPBmcxfY8jPp-UMujO9qJ9pJP16Ov-WdjNl8lCi-UjENNNaJK0tM-9mBLpyx8qG9k"
              />
              <span className="font-display text-2xl font-bold uppercase tracking-wider">Meraki</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-md">
              Especialistas en crear momentos inolvidables a través de regalos personalizados con sublimación. Calidad, rapidez y mucho amor en cada pieza.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-icons-round text-sm">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-icons-round text-sm">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/catalogo" className="hover:text-primary transition-colors">Catálogo de Productos</Link></li>
              <li><Link to="/como-ordenar" className="hover:text-primary transition-colors">Guía de Personalización</Link></li>
              <li><Link to="/galeria" className="hover:text-primary transition-colors">Galería de Trabajos</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary">phone</span>
                <a className="hover:text-white" href="tel:+50374446720">+503 7444 6720</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary">email</span>
                <span>hola@merakigiftstore.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary">location_on</span>
                <span>El Salvador</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Meraki Gift Store. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a className="hover:text-white" href="#">Términos y Condiciones</a>
            <a className="hover:text-white" href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
