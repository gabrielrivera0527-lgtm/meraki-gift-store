import React, { useState, useRef, useEffect, Suspense, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { DataContext, BaseProduct } from '../context/DataContext';

// Lazy load 3D component to avoid huge bundle
const Product3D = React.lazy(() => import('../components/canvas/Product3D'));

const Customize: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { baseProducts, loading } = useContext(DataContext);
  const { addItem } = useCart();

  const [selectedBaseId, setSelectedBaseId] = useState<string>(id === 'new' ? '' : id || '');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');

  // Transformation state
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // View state (Front/Back)
  const [currentViewId, setCurrentViewId] = useState<string>('default');

  // Magic Mug state
  const [isHot, setIsHot] = useState(true); // Default to showing design (Hot)

  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (baseProducts.length > 0 && (!selectedBaseId || !baseProducts.find(p => p.id === selectedBaseId))) {
      setSelectedBaseId(baseProducts[0].id);
    }
  }, [baseProducts, selectedBaseId]);

  const selectedBaseProduct = baseProducts.find(p => p.id === selectedBaseId);

  // Color state
  const [selectedColor, setSelectedColor] = useState<string>('#FFFFFF');

  // Reset view when product changes
  useEffect(() => {
    if (selectedBaseProduct?.views && selectedBaseProduct.views.length > 0) {
      setCurrentViewId(selectedBaseProduct.views[0].id);
    } else {
      setCurrentViewId('default');
    }
    // Reset magic mug state
    setIsHot(true);
  }, [selectedBaseId, selectedBaseProduct]);

  useEffect(() => {
    if (selectedBaseProduct?.availableColors && selectedBaseProduct.availableColors.length > 0) {
      setSelectedColor(selectedBaseProduct.availableColors[0]);
    } else {
      setSelectedColor('#FFFFFF');
    }
  }, [selectedBaseId, selectedBaseProduct]);

  const getCurrentImage = () => {
    if (!selectedBaseProduct) return '';
    if (currentViewId !== 'default' && selectedBaseProduct.views) {
      const view = selectedBaseProduct.views.find(v => v.id === currentViewId);
      return view ? view.image : selectedBaseProduct.baseImage;
    }
    return selectedBaseProduct.baseImage;
  };

  const getCurrentOverlay = () => {
    if (!selectedBaseProduct) return undefined;
    if (currentViewId !== 'default' && selectedBaseProduct.views) {
      const view = selectedBaseProduct.views.find(v => v.id === currentViewId);
      return view?.overlay || selectedBaseProduct.overlayImage; // Fallback to main overlay
    }
    return selectedBaseProduct.overlayImage;
  };

  const getCurrentMask = () => {
    if (!selectedBaseProduct) return undefined;
    if (currentViewId !== 'default' && selectedBaseProduct.views) {
      const view = selectedBaseProduct.views.find(v => v.id === currentViewId);
      return view ? view.mask : selectedBaseProduct.maskImage;
    }
    return selectedBaseProduct.maskImage;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageName(file.name);
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUploadedImage(ev.target?.result as string);
        // Reset transformations
        setScale(1);
        setRotation(0);
        setPosition({ x: 0, y: 0 });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleAddToCart = () => {
    if (!selectedBaseProduct) return;

    // Determine view name
    let viewName = 'Estándar';
    if (selectedBaseProduct.views) {
      const view = selectedBaseProduct.views.find(v => v.id === currentViewId);
      if (view) viewName = view.name;
    }

    addItem({
      productId: selectedBaseProduct.id,
      name: selectedBaseProduct.name,
      price: selectedBaseProduct.price,
      quantity: 1,
      image: selectedBaseProduct.baseImage, // Thumbnail always default for now
      isCustom: true,
      customDetails: {
        baseProductId: selectedBaseProduct.id,
        uploadedImageName: `${imageName || 'Diseño'} (${viewName}, Color: ${selectedColor})`,
        designConfig: { scale, x: position.x, y: position.y, rotation }
      }
    });

    navigate('/carrito');
  };

  if (loading) {
    return <div className="min-h-screen pt-24 flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
  }

  // Helper to determine if we should treat the image as a maskable layer for coloring
  // For simplicity, we assume if availableColors exists, we tint the base image
  const isColorable = selectedBaseProduct?.availableColors && selectedBaseProduct.availableColors.length > 0;

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background-light dark:bg-background-dark transition-colors">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
          Crea tu Diseño Único
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Controls */}
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">

            {/* Base Product Selector */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-4 dark:text-white">1. Producto</h3>
              <div className="flex flex-wrap gap-2">
                {baseProducts.map(product => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedBaseId(product.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${selectedBaseId === product.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>

            {/* View Selector (if views exist) */}
            {selectedBaseProduct?.views && selectedBaseProduct.views.length > 0 && (
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold mb-4 dark:text-white">Vista</h3>
                <div className="flex gap-2">
                  {selectedBaseProduct.views.map(view => (
                    <button
                      key={view.id}
                      onClick={() => setCurrentViewId(view.id)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${currentViewId === view.id
                        ? 'bg-slate-800 text-white dark:bg-white dark:text-black'
                        : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300'
                        }`}
                    >
                      {view.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {isColorable && (
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold mb-4 dark:text-white">Color Base</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedBaseProduct?.availableColors?.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-transform hover:scale-110 ${selectedColor === color ? 'border-primary ring-2 ring-primary/30' : 'border-slate-200 dark:border-zinc-700'}`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Magic Mug Toggle */}
            {selectedBaseProduct?.isMagicMug && (
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border-2 border-primary/20">
                <h3 className="font-bold mb-4 dark:text-white flex items-center gap-2">
                  <span className="material-icons-round text-primary">science</span>
                  Efecto Mágico
                </h3>
                <div className="flex bg-slate-100 dark:bg-zinc-800 rounded-lg p-1">
                  <button
                    onClick={() => setIsHot(false)}
                    className={`flex-1 py-2 rounded-md text-sm font-bold flex items-center justify-center gap-2 transition-all ${!isHot ? 'bg-black text-white shadow' : 'text-slate-500'}`}
                  >
                    <span className="material-icons-round text-blue-400">ac_unit</span> Fría
                  </button>
                  <button
                    onClick={() => setIsHot(true)}
                    className={`flex-1 py-2 rounded-md text-sm font-bold flex items-center justify-center gap-2 transition-all ${isHot ? 'bg-white text-primary shadow' : 'text-slate-500'}`}
                  >
                    <span className="material-icons-round text-orange-500">whatshot</span> Caliente
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-2 text-center">
                  {!isHot ? "La taza es negra cuando está fría, ocultando tu diseño." : "¡Al verter líquido caliente, tu diseño aparece!"}
                </p>
              </div>
            )}

            {/* Upload & Transform */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold mb-4 dark:text-white">2. Tu Diseño</h3>
              <div className="mb-6">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-pink-50 file:text-primary
                    hover:file:bg-pink-100"
                />
              </div>

              {uploadedImage && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Tamaño</label>
                    <input
                      type="range" min="0.5" max="2" step="0.1"
                      value={scale} onChange={(e) => setScale(parseFloat(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-600 dark:text-slate-400 mb-1">Rotación</label>
                    <input
                      type="range" min="-180" max="180" step="5"
                      value={rotation} onChange={(e) => setRotation(parseFloat(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Price & Action */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold dark:text-white">Total:</span>
                <span className="text-3xl font-display font-bold text-primary">
                  ${selectedBaseProduct?.price.toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedBaseProduct}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-pink-200 dark:shadow-none hover:bg-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span className="material-icons-round">add_shopping_cart</span>
                Agregar al Carrito
              </button>
            </div>

          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className={`sticky top-24 transition-all duration-500`}>
              <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-xl overflow-hidden aspect-square relative border-2 border-dashed border-slate-200 dark:border-zinc-700 flex items-center justify-center group">

                {!selectedBaseProduct ? (
                  <p className="text-slate-400">Selecciona un producto base</p>
                ) : (
                  /* 3D View for ALL Products (Procedural Fallback) */
                  <Suspense fallback={<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>}>
                    <Product3D
                      productType={selectedBaseProduct.name}
                      image={uploadedImage || undefined}
                      color={selectedColor}
                      isMagic={selectedBaseProduct.isMagicMug}
                      isHot={isHot}
                    />
                  </Suspense>
                )}
              </div>
              <p className="text-center text-slate-400 text-sm mt-4">
                * Arrastra, rota y ajusta el tamaño de tu diseño.
                {selectedBaseProduct?.isMagicMug && <br />}
                {selectedBaseProduct?.isMagicMug && <span className="text-primary font-bold">¡Prueba el interruptor Frío/Caliente para ver la magia!</span>}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Customize;
