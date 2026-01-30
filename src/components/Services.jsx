const Services = () => {
  const services = [
    {
      icon: '💅',
      title: 'Nail Tay',
      description: 'Làm móng tay đẹp từ cơ bản đến thiết kế',
      prices: [
        { name: 'Sơn thường', price: '50.000đ' },
        { name: 'Sơn gel', price: '100.000đ' },
        { name: 'Gel cơ bản', price: '150.000đ' },
        { name: 'Gel có thiết kế', price: '200.000đ+' },
      ],
      color: 'from-soft-pink to-rose/30'
    },
    {
      icon: '🦶',
      title: 'Nail Chân',
      description: 'Chăm sóc và làm đẹp móng chân',
      prices: [
        { name: 'Sơn thường', price: '60.000đ' },
        { name: 'Sơn gel', price: '120.000đ' },
        { name: 'Gel có thiết kế', price: '180.000đ+' },
      ],
      color: 'from-lavender to-soft-pink/30'
    },
    {
      icon: '✨',
      title: 'Combo Ưu Đãi',
      description: 'Tiết kiệm hơn khi làm combo',
      prices: [
        { name: 'Tay + Chân sơn thường', price: '100.000đ' },
        { name: 'Tay + Chân sơn gel', price: '180.000đ' },
        { name: 'Full set có thiết kế', price: '280.000đ+' },
      ],
      color: 'from-mint to-lavender/30'
    },
    {
      icon: '🎨',
      title: 'Vẽ Theo Yêu Cầu',
      description: 'Thiết kế riêng theo ý tưởng của bạn',
      prices: [
        { name: 'Vẽ đơn giản', price: '+30.000đ' },
        { name: 'Vẽ phức tạp', price: '+50.000đ+' },
        { name: 'Custom design', price: 'Báo giá riêng' },
      ],
      color: 'from-cream to-soft-pink/30'
    }
  ]

  const handleBooking = (e) => {
    e.preventDefault()
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-cream to-soft-pink/20 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-20 left-10 text-3xl opacity-30">🌸</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-30">💐</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">💅</span>
          <h2 className="section-title">Dịch Vụ & Bảng Giá</h2>
          <p className="section-subtitle">Giá cả hợp lý, chất lượng đảm bảo</p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${service.color} p-6 text-center`}>
                <span className="text-5xl block mb-2 group-hover:scale-110 transition-transform">
                  {service.icon}
                </span>
                <h3 className="text-xl font-display text-soft-brown font-bold">
                  {service.title}
                </h3>
                <p className="text-sm text-warm-brown mt-1">
                  {service.description}
                </p>
              </div>

              {/* Prices */}
              <div className="p-6">
                <ul className="space-y-3">
                  {service.prices.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-warm-brown">{item.name}</span>
                      <span className="font-semibold text-rose">{item.price}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={handleBooking}
                  className="w-full mt-6 bg-soft-pink text-rose-dark py-2 rounded-full font-medium hover:bg-rose hover:text-white transition-colors"
                >
                  Đặt lịch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-soft">
            <span>📌</span>
            <span className="text-warm-brown text-sm">
              Giá có thể thay đổi tùy độ phức tạp của mẫu. Liên hệ để được báo giá chính xác nhé!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
