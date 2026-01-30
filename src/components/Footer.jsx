const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Trang chủ', href: '#hero' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Mẫu nail', href: '#gallery' },
    { name: 'Đặt lịch', href: '#booking' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-soft-brown text-cream py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💅</span>
              <span className="font-script text-2xl text-soft-pink">Tiệm nhà Chan</span>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Tiệm nail nhỏ xinh tại nhà, nơi những bộ móng được chăm sóc bằng cả trái tim.
            </p>
            <div className="flex gap-3 mt-4">
              <a 
                href="https://facebook.com/tiemnhachan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                📘
              </a>
              <a 
                href="https://zalo.me/0123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                💬
              </a>
              <a 
                href="tel:0123456789"
                className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                📞
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-cream/80 hover:text-soft-pink transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Đường ABC, Quận XYZ, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:0123456789" className="hover:text-soft-pink transition-colors">
                  0123.456.789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>9:00 - 20:00 hàng ngày</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>© {currentYear} Tiệm nhà Chan. Made with 💕</p>
            <p>
              Designed & developed with love 🌸
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
