import { useState } from 'react'

const Booking = () => {
  const [showForm, setShowForm] = useState(false)

  // Thay bằng Google Form URL thật
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true'
  const GOOGLE_FORM_LINK = 'https://forms.gle/xxx'
  const ZALO_LINK = 'https://zalo.me/0123456789'
  const PHONE_NUMBER = '0123456789'

  const steps = [
    { icon: '📝', text: 'Điền thông tin' },
    { icon: '📱', text: 'Chan xác nhận qua Zalo/SĐT' },
    { icon: '💅', text: 'Đến tiệm làm đẹp' },
  ]

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-cream to-soft-pink/30 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-10 right-10 text-4xl opacity-30">📅</div>
      <div className="absolute bottom-20 left-10 text-3xl opacity-30">💅</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">📅</span>
          <h2 className="section-title">Đặt Lịch Làm Nail</h2>
          <p className="section-subtitle">Chỉ cần vài bước đơn giản là có lịch hẹn!</p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="flex-1 md:flex-none">
                <span className="text-soft-brown font-medium">{step.text}</span>
              </div>
              {index < steps.length - 1 && (
                <span className="hidden md:block text-rose text-2xl">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Booking Box */}
        <div className="bg-white rounded-3xl shadow-soft-lg overflow-hidden">
          {/* Info */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-soft-pink to-lavender/50">
            <h3 className="text-xl font-display text-soft-brown mb-4 text-center">
              🌸 Để đặt lịch, bạn cần:
            </h3>
            <ul className="space-y-2 max-w-md mx-auto">
              {[
                'Chọn ngày giờ phù hợp',
                'Chọn dịch vụ muốn làm',
                'Để lại số điện thoại hoặc Zalo'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-warm-brown">
                  <span className="text-mint">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center mt-4 text-rose font-medium">
              💝 Chan sẽ xác nhận qua Zalo/SĐT trong vòng 2 tiếng nhé!
            </p>
          </div>

          {/* Actions */}
          <div className="p-6 md:p-8">
            {/* Desktop: Show Form */}
            <div className="hidden md:block">
              {!showForm ? (
                <div className="text-center">
                  <button
                    onClick={() => setShowForm(true)}
                    className="btn-primary text-lg inline-flex items-center gap-2"
                  >
                    <span>💅</span>
                    <span>Mở form đặt lịch</span>
                  </button>
                </div>
              ) : (
                <div>
                  <iframe
                    src={GOOGLE_FORM_URL}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className="rounded-xl"
                  >
                    Đang tải form...
                  </iframe>
                  <button
                    onClick={() => setShowForm(false)}
                    className="mt-4 text-warm-brown hover:text-rose transition-colors"
                  >
                    ← Thu gọn form
                  </button>
                </div>
              )}
            </div>

            {/* Mobile: Button to open form */}
            <div className="md:hidden text-center">
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg inline-flex items-center gap-2 w-full justify-center"
              >
                <span>💅</span>
                <span>Đặt lịch ngay</span>
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-soft-pink"></div>
              <span className="text-warm-brown">hoặc</span>
              <div className="flex-1 h-px bg-soft-pink"></div>
            </div>

            {/* Alternative contact */}
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.655c-.396.396-1.08.612-1.92.612h-2.736v-1.2h2.736c.48 0 .816-.096 1.008-.288.192-.192.288-.528.288-1.008V9.6c0-.48-.096-.816-.288-1.008-.192-.192-.528-.288-1.008-.288h-4.08v7.2H10.2V6.6h5.448c.84 0 1.524.216 1.92.612.396.396.612 1.08.612 1.92v3.6c0 .84-.216 1.524-.612 1.92z"/>
                </svg>
                <span>Nhắn Zalo</span>
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-mint text-soft-brown rounded-full font-medium hover:bg-green-200 transition-colors"
              >
                <span>📞</span>
                <span>Gọi: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-warm-brown text-sm">
            <span>💡</span>
            <span>Đặt trước 1 ngày để có slot đẹp nhé!</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
