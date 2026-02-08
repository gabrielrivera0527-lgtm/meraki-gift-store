
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { INSTAGRAM_FEED } from '../constants';
import { DataContext } from '../context/DataContext';

const Home: React.FC = () => {
  const { testimonials } = useContext(DataContext);
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-12 pb-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-primary font-bold text-sm mb-6 uppercase tracking-widest">Detalles únicos</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              Regalos <span className="text-primary italic">personalizados</span> hechos con amor
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
              Convertimos tus ideas y recuerdos en productos únicos mediante sublimación de alta calidad. El detalle perfecto para esa persona especial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/personalizar/1" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                Personalizar ahora
                <span className="material-icons-round">edit</span>
              </Link>
              <Link to="/catalogo" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors flex items-center justify-center">
                Ver Catálogo
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 blur-3xl rounded-full"></div>
            <img
              alt="Regalos personalizados creativos"
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800 rotate-2"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCylwJCsTGVPHoM1ITsDima3Rr54loStrTyR5p7Nk4nxS-NiArYycV0-wlaRRTYtJ-qxPFD_71nVHFtlFGbMrT7z4fCzBRJ2oNERYmapYM2R5GNwxQ7CbZa_KqdgXc33TJ5vdroS8YqRtq8DuVAgcyIJxtLMZyhi1TjJTlFENesb1T6E7O8mYJgEiWTDrs3E8wR_IuMTWLlMfFYZn1QYAEKbxPZPwnYde1g683mDzUYtATVlN3ZswYadp6lZht4ofXmdVM0aLPK8lY"
            />
          </div>
        </div>
      </header>

      {/* Categories / What we can create */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Lo que podemos crear</h2>
            <p className="text-slate-500 dark:text-slate-400">Descubre nuestra variedad de productos listos para tu diseño</p>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 custom-scrollbar px-2">
            {[
              { title: 'Tazas Mágicas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY9EzChhsv_5mljIfy95Z_30y7EWRM3GmRHjP5VVjVTPwwpswc38Uk99prAAEuSVzAwldAzL-z0sDkSAcaj6HRT5UUtqiMLpLrUjuAlb9lopcndXvKwAqTE_m4vC8ps4VY_CWZuIEqu2ss-XAUJWST7cvAxwSAos8f7uSTbPGw6i23BWLUHLFMcwqoV3oa0rqbvyyxAlClhrCaZSfXuER58q-LOKwMxnDgadotaL-WkhwVmSNOUhXGhA4OoQ1pj1Zrx_PjZIWget0' },
              { title: 'Camisetas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbqNkxf0uBJfGXDa0J08xxkOH9tIrSnIsLFIV3pz6yNtelA9QZ0aywb07fJ5ZOXjVN_y660-vl8YjX-K8VbBhDroWL-pzlrdIMJMe-Ey1Zpb6OOgqxMIliGyy8wbRAYZUFBOwffVwcUB1kfn8fCOQrPRRg5K4BEvU4bsm-DwPzZavV4OQURoxt8yU3e7OHt0_rJWgmkqys-r40J2h8L85NLiJDnxxQu_vpr15b8mZ6U6DXctwejcYGqeTXomnSY3VK5SISFeoLaIc' },
              { title: 'Gorras', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo8EA8EQ5VtRugfxMrR3bRkxT4OeZRY69XoJKAKr_jOBtxf3YvlmbpvTJExUq3TlUUQJ8wegImR0HLXCZel2LxgVDvwOJs1BT_kAn3Z2iddi5UFaxGyCvt2RyH_WXmpyG4TROWJleXMBdyz-JbSduKy38UITkMpCOUiKJcPLUXMz3Qyz78O20c1Jjx-T3W8fwXNeRjJPqSPFHFwfIzX36LNy7dzexN6D-x54N8WnXX02z_kj38Ohn3zxYOMXIABMwiL5KQ_CNjz-M' },
              { title: 'Cuadros y Marcos', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvLOyjVBimvC7VMsmzIp4Bq1_ey7-4D4SwqaZ98x9rrlYZycPaGgaYjigDgPjssNomljqprhKJkzPswlJy9A5bLmKhf2zuXOV1TLWCdqPrmDY0b57y45tt-dxoLp5zJ-2B8TljjdNeQpvpCDMSwLIHYdYetGrla-XeyW4f_tRF85mPAT6xfOhHUWR7BU1FqcAZ50RI1cMiXutyr6SgjvQXRech3TlvrsPtqexwmSIZ9itiARAC0Pi4KW8TNlmWJuSahy2mzwPAlLQ' }
            ].map((cat, idx) => (
              <div key={idx} className="flex-shrink-0 w-64 group cursor-pointer">
                <div className="h-80 rounded-3xl overflow-hidden mb-4 bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center transition-transform group-hover:scale-105">
                  <img alt={cat.title} className="w-full h-full object-cover" src={cat.img} />
                </div>
                <h3 className="font-display text-xl font-bold text-center group-hover:text-primary transition-colors">{cat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-primary/5 dark:bg-pink-900/10 rounded-[3rem] p-12">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-4">¿Cómo funciona?</h2>
              <p className="text-slate-600 dark:text-slate-400">Es tan fácil como 1, 2, 3</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { step: 1, title: 'Elige tu base', desc: 'Selecciona el producto que deseas personalizar de nuestro catálogo.' },
                { step: 2, title: 'Envía tu diseño', desc: 'Mándanos tu foto, frase o diseño favorito. Nosotros te ayudamos a ajustarlo.' },
                { step: 3, title: '¡Listo para regalar!', desc: 'Lo fabricamos con amor y te lo enviamos a la puerta de tu casa.' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg shadow-primary/20">
                    {item.step}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-16">Nuestros clientes felices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={t.id} className={`bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-pink-100 dark:border-pink-900/30 ${idx === 1 ? 'md:translate-y-4' : ''}`}>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-icons-round">star</span>)}
                </div>
                <p className="italic text-slate-600 dark:text-slate-300 mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">{t.initials}</div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">Síguenos en redes</h2>
              <p className="text-slate-500 dark:text-slate-400">@merakigiftstore - Inspírate con nuestras creaciones diarias</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-pink-200 dark:border-pink-900/30 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors">
                <img alt="Instagram" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm94NF2hSH8QKAV1-_ir2gDFXzeTuVqY6eQpOOl1XQgvdARfpoc9oJkgIywCUyIQ1IHOpJY-5fIMXcS1vxocOOu9Y78qIIuH0aLmBLHMr_j0U2I21h7J1wdjZxj5VI9rrf4Ghwa-m0GGUiH8cA1mo5GReSCEyYYeBdrD6GrHwEYKKKG1VlW9gd3_WwA4coZLXD1DYmuJjxd2SoUNIMhV_P9s3c0MHeProIoeAnfmIoMaYHIgiwfxgwuN8k83UE_zciEvWgAoC2WRk" /> Instagram
              </button>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-pink-200 dark:border-pink-900/30 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors">
                <img alt="TikTok" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1GY4o0ILMVnSfBbgrDQtIb_Gu3uf7W94h-dWGJ55FEamD_W7JfZxsPscx3MRWwr8nrp4iEeCr3_nsFewECudvql0IKpagWTvU03ekNX3MvmDe6cQAuFqzxZYgfeSyixF7POWsJWDi2nrxMdVRACxoIh6AnnnL5tTeduE_wURNDWyBsq94W_1LTMghJHwWETmWenMoWqWX_0824usB_bE7wwmoOUFbDPm-wbxc_fXg7nMlo5TbT6zOwp4sQOV97LZ6Psak0yasYHA" /> TikTok
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {INSTAGRAM_FEED.map((img, idx) => (
              <div key={idx} className={`aspect-square rounded-2xl overflow-hidden group relative ${idx > 3 ? 'hidden lg:block' : idx > 2 ? 'hidden md:block' : ''}`}>
                <img alt={`Feed ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={img} />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="material-icons-round text-white text-4xl">favorite</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WA Button */}
      <a
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        href="https://wa.me/50374446720"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="h-7 w-7" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L22 4l-1.5 6.5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Home;
