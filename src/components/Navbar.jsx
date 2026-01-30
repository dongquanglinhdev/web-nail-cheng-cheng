import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Trang chủ', href: '#hero' },
    { name: 'Về tiệm', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Mẫu nail', href: '#gallery' },
    { name: 'Đánh giá', href: '#reviews' },
    { name: 'Đặt lịch', href: '#booking' },
    { name: 'Liên hệ', href: '#contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2" onClick={(e) => handleClick(e, '#hero')}>
            <span className="text-2xl">💅</span>
            <span className="font-script text-2xl text-rose">Tiệm nhà Chan</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-soft-brown hover:text-rose transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => handleClick(e, '#booking')}
              className="btn-primary"
            >
              Đặt lịch ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-soft-pink transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-soft-brown rounded transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-soft-brown rounded transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-soft-brown rounded transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-soft">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-soft-brown hover:text-rose hover:bg-soft-pink px-4 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => handleClick(e, '#booking')}
              className="btn-primary text-center mt-2"
            >
              Đặt lịch ngay 💅
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
