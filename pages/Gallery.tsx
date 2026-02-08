
import React from 'react';
import { Link } from 'react-router-dom';

const GALLERY_ITEMS = [
  { category: 'Tazas', title: 'Kit Aniversario', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjUeBft4937lgA2Lt6jeAeOOvIyXq1HZnpu7SG70t_xG9-iXLPwQExkuOlS5vIKM54H5FD8yXqadmXUD2cpbytJ-85wqwSlUjFmqY6A3QAHQXY-qTZnK8YsI5dqodbJII49HHFN6aOcthOQczJbZTPZEj_H9TB2ivGdEftjIcXy6Jch_Jlvi6JhdYJMKGQKPxleEJrioInfwtOR_RzDPdt6CUZyJtOC3oa4T2KMv0mxDmxKZIWrRbxP-MIKLfUQ02haXmND3OiKjA', desc: 'Sublimación de alta calidad con acabado brillante para celebrar 10 años.' },
  { category: 'Textiles', title: 'Camiseta Ilustrada', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD62bMpXL78f7d19fsjsTTJ955bH2YsWx6PkNrjm1m7O636Ughh8-os1emCwaxsX2K17oeVNzgADt6IORIEsONjrD3Xgb7geQJPlu76deNxPCEL4VDhdd0dlfRLxJEFs444Fg0XV2EqGcsy7SYTCdbTOh1uGJX6EsOQBG31Ymtw85Kvp64wUxiTZMbi3S7e3TAYdnqgOPXq4laVJGkApreaR__bNrJJCqJqfHYI4rwp2ZJwk_XNUJ0ig4OZQLhECVbsS4QrqL0TQqo', desc: 'Diseño exclusivo impreso en algodón suave para un artista local.' },
  { category: 'Especiales', title: 'Box Cumpleaños', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy6lGeJNQ_Y4wnnrR8bKlfEPYAsVZGZ8dpInwvSLRshaHG004IMUeUSnOIbuZZTeYQm7eZohOnhtgj_yBsiPlNc8sjYdWVEwyEKYHgx2m7QWQBzFJMs6rhtcr10_a-VUrKz5DTRfieRqZfbQ7TxHHahwkdLIFcoID5IWgICihE6xd82fC0M84nwekkRkYl_0X4B44GoG-bVRbLB8ERZ3Es7oXW8Gr-VVy_eLi4s_XGYlmrzoJPAkjU1_XCrsXQXChUwk5xREeAGOQ', desc: 'Una experiencia completa de unboxing personalizada para cada cliente.' },
  { category: 'Llaveros', title: 'Detalles para Bodas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPY26daeuOhHdx9d69RZdToid0Z7rZB7vSLJb6Aov4Q_VfuAyg04Zmfu59ZrA-ag5H1a91A4AZQi-x79agHOErEN0gWXqgyQIPx-l77os1e2u0Rgf333y1aD6BYTlO8-tppmvJ36qNU9JzlT06nzFTGx6YoIfsIqgyZ627eD8Cl4T1mjZNV-rnb-4bKhTMiiriKS8Aznly8sjWxHL6s7ebc-fZdRIV8PFmTDzrS8UI9UvIN_FQ4_4RMtNJJXipUu0CYMPDR24Q5QY', desc: 'Souvenirs grabados para recordar un día inolvidable.' },
  { category: 'Especiales', title: 'Botella Deportiva', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaKc-UiTwg2asX7uknoMu3r_ZuTHubORwEM0EMUtHLPsSKmhuM7XYX_a9Wo4w9_I9K-UuDatMHBHZWSKmG64RzQwbs_5AGTaVxVTeV514TiVIFX0dJraCXp3X03JLqunWdWx_prw1MvrE5mpQujk5v5HJjuR-bOeAqocn3ydE9hMX4iw6hlgFEVmBAPUqOfszURLU12yb1ZaDleNs_oZH9jEiTAqv4OFyRpC4eaIW3plu3V-MEUAxF341X7_gMI3CDqt4YvTaBIKs', desc: 'Personalización completa para un equipo de running local.' },
  { category: 'Textiles', title: 'Colección Invierno', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcse4Q3Lh2KM_ijoNF6DQPUC0Xbm03s7gcftl0ach4PJaNNtC-_pZOYd76Z9_QMZy5C1PJKC20oTXcG_bi-J9RSzi1BsOqVEacThMyDU0IAxfnA9MgDLPPxL9EpYdJGPlexW3eDwqDGj8ZxstQbprHsWMeM85KFAGcKkJ-H2CySFwXt_aDtQfgjUcA6-D8FeYTuHXjPccwoATqhW8crb2U45-RoknJY6Sv3hOhRnKPfjq83KpqhFKyz-iJMZcl-HhvKf3SA6GMYjc', desc: 'Bordado y sublimación combinados para máxima durabilidad.' }
];

const Gallery: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <header className="py-16 md:py-24 px-4 bg-gradient-to-b from-pink-50 to-transparent dark:from-pink-900/10 dark:to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif italic text-primary mb-6">Galería de Trabajos</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-outfit">
            Descubre la magia de la personalización. Cada pieza en nuestra galería cuenta una historia única creada con amor y detalle.
          </p>
        </div>
      </header>

      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-2.5 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 transition-all hover:scale-105">Todos</button>
            <button className="px-6 py-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-pink-100 dark:border-slate-700 font-medium hover:border-primary transition-all">Tazas</button>
            <button className="px-6 py-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-pink-100 dark:border-slate-700 font-medium hover:border-primary transition-all">Textiles</button>
            <button className="px-6 py-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-pink-100 dark:border-slate-700 font-medium hover:border-primary transition-all">Llaveros</button>
            <button className="px-6 py-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-pink-100 dark:border-slate-700 font-medium hover:border-primary transition-all">Especiales</button>
          </div>
        </div>
      </section>

      <main className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <div key={idx} className="relative group break-inside-avoid overflow-hidden rounded-[2rem] bg-white dark:bg-slate-800 shadow-sm border border-pink-50 dark:border-slate-800">
                <img alt={item.title} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" src={item.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-semibold text-sm mb-1">{item.category}</span>
                  <h3 className="text-white font-outfit font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-200 text-sm mb-4 font-outfit">{item.desc}</p>
                  <button className="flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-full w-fit hover:bg-primary/90 transition-colors">
                    <span className="material-icons-round text-sm">favorite</span>
                    <span>Me encanta</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
              Cargar más proyectos
            </button>
          </div>
        </div>
      </main>

      <section className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif italic mb-6">¿Tienes una idea en mente?</h2>
          <p className="text-lg md:text-xl text-pink-100 mb-10 leading-relaxed font-outfit">
            Hacemos realidad tus diseños sobre cualquier superficie. Contáctanos hoy y comienza a crear un regalo inolvidable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="px-8 py-4 bg-white text-primary font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2" href="https://wa.me/50374446720" target="_blank" rel="noopener noreferrer">
              <span className="material-icons-round">chat_bubble</span>
              Contactar por WhatsApp
            </a>
            <Link to="/catalogo" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
              Ver Catálogo
              <span className="material-icons-round">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
