import { useState } from 'react'

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    {
      name: 'Zalo',
      icon: '💬',
      href: 'https://zalo.me/0123456789',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Messenger',
      icon: '💭',
      href: 'https://m.me/tiemnhachan',
      color: 'bg-gradient-to-r from-blue-500 to-purple-500'
    },
    {
      name: 'Gọi điện',
      icon: '📞',
      href: 'tel:0123456789',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Contact options */}
      <div className={`absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={contact.href.startsWith('tel') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-4 py-2 rounded-full text-white shadow-lg ${contact.color} transition-transform hover:scale-105`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <span className="text-lg">{contact.icon}</span>
            <span className="font-medium whitespace-nowrap">{contact.name}</span>
          </a>
        ))}
      </div>

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-soft-brown text-cream rotate-45' 
            : 'bg-rose text-white hover:bg-rose-dark animate-pulse'
        }`}
        aria-label="Liên hệ"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Tooltip for closed state */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 pointer-events-none">
          <div className="bg-soft-brown text-cream text-sm px-3 py-1 rounded-lg whitespace-nowrap">
            Liên hệ ngay!
          </div>
        </div>
      )}
    </div>
  )
}

export default FloatingButton
