const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-soft-pink via-cream to-lavender">
      {/* Floral Decorations */}
      <div className="absolute top-20 left-4 md:left-10 text-4xl md:text-6xl opacity-60 float-animation">🌸</div>
      <div className="absolute top-40 right-8 md:right-20 text-3xl md:text-5xl opacity-50 float-animation" style={{ animationDelay: '1s' }}>🌷</div>
      <div className="absolute bottom-32 left-10 md:left-32 text-3xl md:text-4xl opacity-40 float-animation" style={{ animationDelay: '2s' }}>🌺</div>
      <div className="absolute top-60 left-1/4 text-2xl md:text-3xl opacity-30 float-animation" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute bottom-40 right-1/4 text-2xl md:text-3xl opacity-40 float-animation" style={{ animationDelay: '1.5s' }}>💅</div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="text-center max-w-3xl mx-auto fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-soft">
            <span className="text-lg">💕</span>
            <span className="text-soft-brown font-medium">Nail salon tại nhà</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-script text-rose mb-4">
            Tiệm nhà Chan
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-soft-brown font-body mb-2">
            ✨ Nơi những bộ móng xinh được chăm chút từ trái tim ✨
          </p>
          <p className="text-lg text-warm-brown mb-8">
            Tỉ mỉ từng chi tiết • Giá cả hợp lý • Không gian ấm cúng
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              onClick={(e) => handleScroll(e, '#booking')}
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
            >
              <span>💅</span>
              <span>Đặt lịch ngay</span>
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleScroll(e, '#gallery')}
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
            >
              <span>🎨</span>
              <span>Xem mẫu nail</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-warm-brown">
            <div className="flex items-center gap-2">
              <span className="text-mint text-lg">✓</span>
              <span>Dụng cụ tiệt trùng</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-mint text-lg">✓</span>
              <span>Sản phẩm an toàn</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-mint text-lg">✓</span>
              <span>Làm tỉ mỉ</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-warm-brown">
            <span className="text-sm">Khám phá</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFF8F0"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
