const Contact = () => {
  // Thay bằng thông tin thật
  const contactInfo = {
    phone: '0123456789',
    zalo: 'https://zalo.me/0123456789',
    facebook: 'https://facebook.com/tiemnhachan',
    messenger: 'https://m.me/tiemnhachan',
    address: '123 Đường ABC, Phường XYZ, Quận 123, TP.HCM',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d106.123456789!3d10.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzI0LjAiTiAxMDbCsDA3JzI0LjAiRQ!5e0!3m2!1svi!2s!4v1234567890',
    hours: {
      weekday: '9:00 - 20:00',
      weekend: '10:00 - 18:00'
    }
  }

  const socialLinks = [
    {
      name: 'Gọi điện',
      icon: '📞',
      href: `tel:${contactInfo.phone}`,
      label: contactInfo.phone,
      color: 'bg-rose hover:bg-rose-dark text-white'
    },
    {
      name: 'Zalo',
      icon: '💬',
      href: contactInfo.zalo,
      label: 'Nhắn Zalo',
      color: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    {
      name: 'Messenger',
      icon: '💭',
      href: contactInfo.messenger,
      label: 'Messenger',
      color: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
    },
    {
      name: 'Facebook',
      icon: '📘',
      href: contactInfo.facebook,
      label: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-700 text-white'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-soft-pink/30 to-cream relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-10 right-10 text-4xl opacity-30">📍</div>
      <div className="absolute bottom-20 left-10 text-3xl opacity-30">💕</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📍</span>
          <h2 className="section-title">Liên Hệ Với Chan</h2>
          <p className="section-subtitle">Đừng ngại nhắn tin hỏi han nhé!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="card">
              <h3 className="text-lg font-display text-soft-brown mb-4">
                📱 Liên hệ nhanh
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('tel') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${link.color}`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="card">
              <h3 className="text-lg font-display text-soft-brown mb-4">
                📍 Địa chỉ tiệm
              </h3>
              <p className="text-warm-brown mb-4">
                {contactInfo.address}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose hover:underline"
              >
                <span>🗺️</span>
                <span>Xem trên Google Maps</span>
              </a>
            </div>

            {/* Opening Hours */}
            <div className="card">
              <h3 className="text-lg font-display text-soft-brown mb-4">
                🕐 Giờ mở cửa
              </h3>
              <div className="space-y-2 text-warm-brown">
                <div className="flex justify-between">
                  <span>Thứ 2 - Thứ 7:</span>
                  <span className="font-medium">{contactInfo.hours.weekday}</span>
                </div>
                <div className="flex justify-between">
                  <span>Chủ nhật:</span>
                  <span className="font-medium">{contactInfo.hours.weekend}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-soft-pink/50 rounded-xl">
                <p className="text-sm text-rose-dark">
                  💡 Tip: Đặt lịch trước 1 ngày để có slot đẹp nhé!
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="card p-0 overflow-hidden">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[300px] bg-soft-pink">
              {/* Placeholder for map - thay bằng iframe thật */}
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <span className="text-6xl mb-4">🗺️</span>
                <p className="text-soft-brown font-medium mb-2">Google Maps</p>
                <p className="text-warm-brown text-sm mb-4">
                  Thay thế bằng iframe Google Maps thật
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Mở Google Maps
                </a>
              </div>
              
              {/* Uncomment khi có embed URL thật */}
              {/* <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí Tiệm nhà Chan"
              /> */}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-soft">
            <span className="text-3xl">💝</span>
            <div className="text-left">
              <p className="font-display text-soft-brown text-lg">
                Có thắc mắc gì cứ nhắn Chan nhé!
              </p>
              <p className="text-warm-brown text-sm">
                Chan sẽ rep nhanh nhất có thể
              </p>
            </div>
            <a
              href={contactInfo.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              💬 Chat ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
