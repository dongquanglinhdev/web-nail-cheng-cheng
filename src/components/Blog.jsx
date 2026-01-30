import { useState } from 'react'

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null)

  const blogPosts = [
    {
      id: 1,
      title: '5 cách giữ móng gel bền đẹp hơn',
      excerpt: 'Móng hay bị bong tróc sau 1 tuần? Đây là những mẹo nhỏ giúp bạn giữ móng đẹp lâu hơn...',
      content: `
        <p>Bạn vừa làm bộ móng gel xinh xắn nhưng lo lắng nó sẽ bong sớm? Đừng lo, đây là 5 mẹo đơn giản giúp móng bền đẹp hơn:</p>
        
        <h4>1. Tránh ngâm nước quá lâu</h4>
        <p>Nước có thể làm gel bị bong. Khi rửa bát, giặt đồ, hãy đeo găng tay nhé!</p>
        
        <h4>2. Không dùng móng như "công cụ"</h4>
        <p>Đừng dùng móng để cạy, bóc tem hay mở nắp. Móng sẽ cảm ơn bạn đó!</p>
        
        <h4>3. Dưỡng ẩm cho móng</h4>
        <p>Thoa dầu dưỡng móng hoặc kem dưỡng da tay hàng ngày, đặc biệt vùng khóe móng.</p>
        
        <h4>4. Tránh nhiệt độ cao đột ngột</h4>
        <p>Nước quá nóng hoặc thay đổi nhiệt độ đột ngột có thể làm gel co giãn và bong.</p>
        
        <h4>5. Đến tiệm kiểm tra định kỳ</h4>
        <p>Nếu thấy móng có dấu hiệu bong, hãy đến tiệm để được xử lý sớm nhé!</p>
        
        <p><strong>💕 Chúc các bạn luôn có những bộ móng xinh!</strong></p>
      `,
      category: 'tips',
      categoryLabel: 'Mẹo hay',
      emoji: '💡',
      date: '2026-01-25'
    },
    {
      id: 2,
      title: 'Trend nail hot nhất Tết 2026 🧧',
      excerpt: 'Những mẫu nail đang được yêu thích nhất dịp Tết năm nay. Từ đơn giản đến lấp lánh...',
      content: `
        <p>Tết đến rồi, cùng điểm qua những mẫu nail hot nhất năm nay nhé!</p>
        
        <h4>🌸 1. Nail hoa đào</h4>
        <p>Cổ điển mà không bao giờ lỗi mốt. Hoa đào trên nền pastel cực kỳ xinh!</p>
        
        <h4>✨ 2. Glitter đỏ vàng</h4>
        <p>Màu sắc may mắn đầu năm, thêm chút lấp lánh là có ngay bộ nail Tết!</p>
        
        <h4>🎀 3. French nail biến tấu</h4>
        <p>French nail đỏ hoặc vàng thay vì trắng truyền thống, thanh lịch mà vẫn nổi bật.</p>
        
        <h4>🐉 4. Họa tiết rồng</h4>
        <p>Năm Rồng thì không thể thiếu mẫu nail rồng được! Từ minimalist đến chi tiết đều có.</p>
        
        <h4>💎 5. Đính đá Swarovski</h4>
        <p>Đính một vài viên đá lấp lánh cho ngày Tết thêm sang chảnh!</p>
        
        <p><strong>Đặt lịch sớm để có slot đẹp dịp Tết nhé! 🎊</strong></p>
      `,
      category: 'designs',
      categoryLabel: 'Mẫu mới',
      emoji: '🎨',
      date: '2026-01-20'
    },
    {
      id: 3,
      title: 'SALE 20% mừng năm mới! 🎉',
      excerpt: 'Ưu đãi đặc biệt cho tất cả dịch vụ từ ngày 1-15 tháng 2. Đặt lịch ngay nhé!',
      content: `
        <p>🎊 <strong>MỪNG NĂM MỚI - SALE 20% TẤT CẢ DỊCH VỤ!</strong></p>
        
        <h4>⏰ Thời gian áp dụng:</h4>
        <p>Từ ngày 01/02/2026 đến 15/02/2026</p>
        
        <h4>🎁 Ưu đãi bao gồm:</h4>
        <ul>
          <li>Giảm 20% tất cả dịch vụ nail tay, chân</li>
          <li>Tặng thêm 1 ngón vẽ miễn phí cho bill từ 200k</li>
          <li>Free charm đính đá cho khách đặt lịch online</li>
        </ul>
        
        <h4>📝 Cách nhận ưu đãi:</h4>
        <p>Đặt lịch qua form hoặc Zalo và nói "Ưu đãi Tết" là được áp dụng ngay!</p>
        
        <p><strong>💕 Số lượng có hạn, đặt lịch sớm nhé các bạn!</strong></p>
      `,
      category: 'promo',
      categoryLabel: 'Khuyến mãi',
      emoji: '🎁',
      date: '2026-01-15'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      tips: 'bg-mint text-green-700',
      designs: 'bg-lavender text-purple-700',
      promo: 'bg-soft-pink text-rose-dark'
    }
    return colors[category] || 'bg-cream text-soft-brown'
  }

  const openPost = (post) => {
    setSelectedPost(post)
    document.body.style.overflow = 'hidden'
  }

  const closePost = () => {
    setSelectedPost(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="blog" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-10 left-10 text-4xl opacity-30">📝</div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-30">✨</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📝</span>
          <h2 className="section-title">Tin Tức & Mẹo Hay</h2>
          <p className="section-subtitle">Chia sẻ nhỏ từ tiệm nhà Chan</p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="card group cursor-pointer hover:-translate-y-1 transition-all"
              onClick={() => openPost(post)}
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-gradient-to-br from-soft-pink to-lavender rounded-xl mb-4 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-110 transition-transform">
                  {post.emoji}
                </span>
              </div>

              {/* Category tag */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                {post.categoryLabel}
              </span>

              {/* Title */}
              <h3 className="text-lg font-display text-soft-brown mt-3 mb-2 group-hover:text-rose transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-warm-brown text-sm line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-warm-brown/60">
                  {new Date(post.date).toLocaleDateString('vi-VN')}
                </span>
                <span className="text-rose font-medium group-hover:underline">
                  Đọc tiếp →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div 
          className="modal-overlay"
          onClick={closePost}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white flex justify-between items-center p-4 border-b border-soft-pink z-10">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedPost.category)}`}>
                {selectedPost.categoryLabel}
              </span>
              <button 
                onClick={closePost}
                className="w-8 h-8 rounded-full bg-soft-pink hover:bg-rose hover:text-white transition-colors flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
              {/* Featured image */}
              <div className="aspect-video bg-gradient-to-br from-soft-pink to-lavender flex items-center justify-center">
                <span className="text-8xl">{selectedPost.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="text-sm text-warm-brown/60 mb-2">
                  {new Date(selectedPost.date).toLocaleDateString('vi-VN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                <h2 className="text-2xl font-display text-soft-brown mb-6">
                  {selectedPost.title}
                </h2>

                <div 
                  className="prose prose-warm max-w-none text-warm-brown"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white p-4 border-t border-soft-pink">
              <a
                href="#booking"
                onClick={(e) => {
                  closePost()
                  document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary w-full text-center block"
              >
                💅 Đặt lịch làm nail ngay
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog
