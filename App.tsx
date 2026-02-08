
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Customize from './pages/Customize';
import Cart from './pages/Cart';
import HowToOrder from './pages/HowToOrder';
import Gallery from './pages/Gallery';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import { DataProvider } from './context/DataContext';

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/personalizar/:id" element={<Customize />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/como-ordenar" element={<HowToOrder />} />
              <Route path="/galeria" element={<Gallery />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
