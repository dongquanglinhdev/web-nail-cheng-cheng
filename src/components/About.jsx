const About = () => {
  const highlights = [
    {
      icon: '🧼',
      title: 'Sạch sẽ',
      description: 'Dụng cụ được tiệt trùng kỹ lưỡng sau mỗi lần sử dụng'
    },
    {
      icon: '💅',
      title: 'Tỉ mỉ',
      description: 'Làm cẩn thận từng chi tiết, không vội vàng'
    },
    {
      icon: '🏠',
      title: 'Ấm cúng',
      description: 'Không gian như ở nhà, thoải mái và thư giãn'
    }
  ]

  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Floral decoration */}
      <div className="absolute top-10 right-10 text-4xl opacity-30">🌸</div>
      <div className="absolute bottom-10 left-10 text-3xl opacity-30">🌷</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">💕</span>
          <h2 className="section-title">Về Tiệm Nhà Chan</h2>
          <p className="section-subtitle">Nơi những bộ móng được chăm sóc bằng cả trái tim</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-soft-pink to-lavender rounded-3xl overflow-hidden shadow-soft-lg">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-8xl block mb-4">👩‍🎨</span>
                  <p className="text-soft-brown font-medium">Ảnh chủ tiệm</p>
                  <p className="text-sm text-warm-brown mt-2">(Thay bằng ảnh thật)</p>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-lavender/30 rounded-full blur-xl"></div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-soft-pink px-4 py-2 rounded-full">
              <span>👋</span>
              <span className="font-medium text-rose-dark">Xin chào!</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-display text-soft-brown">
              Mình là Chan, chủ của tiệm nail nhỏ xinh này!
            </h3>
            
            <div className="space-y-4 text-warm-brown leading-relaxed">
              <p>
                <strong className="text-soft-brown">Tiệm nhà Chan</strong> là tiệm nail nhỏ tại nhà, 
                nơi mình đặt trọn tâm huyết vào từng bộ móng cho khách.
              </p>
              <p>
                Mình tin rằng làm nail không chỉ là làm đẹp, mà còn là khoảng thời gian thư giãn, 
                được chăm sóc nhẹ nhàng. Vì thế, mình luôn cố gắng tạo không gian ấm cúng và 
                thoải mái nhất cho các bạn.
              </p>
              <p>
                Với mình, mỗi bộ móng là một tác phẩm nhỏ. Mình sẽ lắng nghe ý tưởng của bạn 
                và biến chúng thành hiện thực trên những ngón tay xinh đẹp! 💅
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-rose pl-4 italic text-warm-brown">
              "Làm đẹp từ những điều nhỏ nhất, bắt đầu từ đầu ngón tay"
            </blockquote>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="card text-center group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-display text-soft-brown mb-2">
                {item.title}
              </h4>
              <p className="text-warm-brown">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
