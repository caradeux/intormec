import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('todos');
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState<Array<{src: string, alt: string, category: string}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Cargar imágenes dinámicamente - Mostrando solo las primeras 24 por defecto
    const loadImages = () => {
      const imageList = [];
      const imageNumbers = [
        '0000', '0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009',
        '0010', '0011', '0012', '0013', '0014', '0015', '0016', '0017', '0018', '0019',
        '0020', '0021', '0023', '0024', '0025', '0026', '0027', '0028', '0029', '0030',
        '0031', '0032', '0033', '0034', '0035', '0036', '0037', '0038', '0039', '0040',
        '0042', '0043', '0044', '0045', '0046', '0047', '0048', '0049', '0050', '0051',
        '0053', '0054', '0055', '0056', '0057', '0058', '0059', '0060', '0061', '0062',
        '0063', '0064', '0065', '0066', '0067', '0068', '0069', '0070', '0071', '0072',
        '0073', '0074', '0075', '0076', '0077', '0078', '0079', '0080', '0081', '0082',
        '0083', '0084', '0085', '0086', '0087', '0088', '0089', '0090', '0091', '0092',
        '0093', '0094', '0095', '0096'
      ];

      imageNumbers.forEach((num, index) => {
        const category = index < 25 ? 'obras-civiles' : index < 50 ? 'metalmecanica' : index < 75 ? 'vehiculos' : 'otros';
        imageList.push({
          src: `/src/imagenes/IMG-20260113-WA${num}.jpg`,
          alt: `Proyecto INTORMEC - ${category}`,
          category
        });
      });

      setImages(imageList);
    };

    loadImages();
  }, []);

  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'obras-civiles', label: 'Obras Civiles' },
    { id: 'metalmecanica', label: 'Metalmecánica' },
    { id: 'vehiculos', label: 'Vehículos' },
    { id: 'otros', label: 'Otros' }
  ];

  const filteredImages = filter === 'todos' 
    ? images 
    : images.filter(img => img.category === filter);

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, visibleCount);
  const hasMore = filteredImages.length > displayedImages.length;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages.length]);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Galería de Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce algunos de nuestros trabajos realizados con excelencia y dedicación
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === cat.id
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300 hover:border-orange-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 hover-lift"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x300/ea580c/ffffff?text=INTORMEC';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">{image.alt}</p>
                  <div className="flex items-center mt-2 text-sm text-orange-400">
                    <ZoomIn size={16} className="mr-2" />
                    <span>Click para ampliar</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setShowAll(true);
                setVisibleCount(filteredImages.length);
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Más Proyectos ({filteredImages.length - displayedImages.length} restantes)
            </button>
          </div>
        )}

        {showAll && filteredImages.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setShowAll(false);
                setVisibleCount(12);
                document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-orange-600 hover:text-orange-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300 border-2 border-orange-600 hover:bg-orange-50"
            >
              Ver Menos
            </button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors p-2 hover:bg-white/10 rounded-full z-50"
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-orange-500 transition-colors p-3 hover:bg-white/10 rounded-full z-50"
              aria-label="Anterior"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-orange-500 transition-colors p-3 hover:bg-white/10 rounded-full z-50"
              aria-label="Siguiente"
            >
              <ChevronRight size={40} />
            </button>

            <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/800x600/ea580c/ffffff?text=INTORMEC';
                }}
              />
              <p className="text-white mt-4 text-lg">
                {filteredImages[selectedImage].alt} ({selectedImage + 1} / {filteredImages.length})
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
