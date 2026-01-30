import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  // Sample gallery data (thay bằng ảnh thật)
  const galleryItems = [
    { id: 1, category: 'simple', placeholder: '💅', label: 'Gel đơn giản' },
    { id: 2, category: 'design', placeholder: '🌸', label: 'Hoa văn' },
    { id: 3, category: 'glitter', placeholder: '✨', label: 'Lấp lánh' },
    { id: 4, category: 'french', placeholder: '🤍', label: 'French nail' },
    { id: 5, category: 'design', placeholder: '🎨', label: 'Nghệ thuật' },
    { id: 6, category: 'simple', placeholder: '💖', label: 'Pastel' },
    { id: 7, category: 'glitter', placeholder: '💎', label: 'Đính đá' },
    { id: 8, category: 'french', placeholder: '🌷', label: 'Ombre' },
    { id: 9, category: 'design', placeholder: '🦋', label: 'Butterfly' },
    { id: 10, category: 'simple', placeholder: '🌈', label: 'Gradient' },
    { id: 11, category: 'glitter', placeholder: '⭐', label: 'Star' },
    { id: 12, category: 'design', placeholder: '🌺', label: 'Tropical' },
  ]

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'simple', label: 'Đơn giản' },
    { id: 'design', label: 'Có thiết kế' },
    { id: 'glitter', label: 'Lấp lánh' },
    { id: 'french', label: 'French' },
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const openModal = (item) => {
    setSelectedImage(item)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[newIndex])
  }

  return (
    <section id="gallery" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-10 right-20 text-4xl opacity-30">🎨</div>
      <div className="absolute bottom-10 left-20 text-3xl opacity-30">✨</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🎨</span>
          <h2 className="section-title">Bộ Sưu Tập Mẫu Nail</h2>
          <p className="section-subtitle">Một vài tác phẩm từ tiệm nhà Chan</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-rose text-white shadow-pink'
                  : 'bg-white text-warm-brown hover:bg-soft-pink'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="aspect-square bg-gradient-to-br from-soft-pink to-lavender rounded-2xl overflow-hidden cursor-pointer group shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1"
            >
              {/* Placeholder - thay bằng <img> với ảnh thật */}
              <div className="w-full h-full flex flex-col items-center justify-center relative">
                <span className="text-5xl group-hover:scale-110 transition-transform">
                  {item.placeholder}
                </span>
                <span className="text-sm text-warm-brown mt-2">{item.label}</span>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                    🔍
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-10">
          <a
            href="https://facebook.com/tiemnhachan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>🌷</span>
            <span>Xem thêm trên Facebook</span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-soft-pink">
              <span className="font-medium text-soft-brown">{selectedImage.label}</span>
              <button 
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-soft-pink hover:bg-rose hover:text-white transition-colors flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="aspect-square bg-gradient-to-br from-soft-pink to-lavender flex items-center justify-center">
              <span className="text-9xl">{selectedImage.placeholder}</span>
            </div>

            {/* Modal Footer */}
            <div className="p-4 flex justify-between items-center">
              <button 
                onClick={() => navigateImage('prev')}
                className="px-4 py-2 bg-soft-pink rounded-full hover:bg-rose hover:text-white transition-colors"
              >
                ← Trước
              </button>
              <span className="text-warm-brown">
                {filteredItems.findIndex(item => item.id === selectedImage.id) + 1} / {filteredItems.length}
              </span>
              <button 
                onClick={() => navigateImage('next')}
                className="px-4 py-2 bg-soft-pink rounded-full hover:bg-rose hover:text-white transition-colors"
              >
                Sau →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
