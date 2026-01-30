import { useState, useEffect } from 'react'

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Google Sheet ID - Thay bằng ID sheet thật của bạn
  const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID'
  const SHEET_NAME = 'reviews'
  
  // Fallback data khi chưa có Google Sheet
  const fallbackReviews = [
    {
      name: 'Ngọc Anh',
      review: 'Làm móng xinh lắm, chị Chan tỉ mỉ quá! Lần sau sẽ quay lại 💕',
      rating: 5,
      date: '2026-01-25'
    },
    {
      name: 'Minh Thư',
      review: 'Không gian dễ thương, giá hợp lý. Được tư vấn nhiệt tình lắm ạ!',
      rating: 5,
      date: '2026-01-20'
    },
    {
      name: 'Hà My',
      review: 'Lần đầu làm nail, được chị hướng dẫn chọn mẫu phù hợp. Rất hài lòng!',
      rating: 5,
      date: '2026-01-15'
    },
    {
      name: 'Thu Hương',
      review: 'Móng bền đẹp, làm xong cả tuần vẫn như mới. Recommend cho mọi người!',
      rating: 4,
      date: '2026-01-10'
    },
    {
      name: 'Linh Chi',
      review: 'Dụng cụ sạch sẽ, chị làm cẩn thận. Giá sinh viên rất ok 👍',
      rating: 5,
      date: '2026-01-05'
    }
  ]

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Uncomment khi có Google Sheet thật
        // const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`
        // const response = await fetch(url)
        // const text = await response.text()
        // const json = JSON.parse(text.substring(47).slice(0, -2))
        // const rows = json.table.rows
        // const parsedReviews = rows.slice(1).map(row => ({
        //   name: row.c[0]?.v || '',
        //   review: row.c[1]?.v || '',
        //   rating: row.c[2]?.v || 5,
        //   date: row.c[3]?.v || ''
        // }))
        // setReviews(parsedReviews)
        
        // Dùng fallback data
        setReviews(fallbackReviews)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching reviews:', err)
        setError('Không thể tải đánh giá')
        setReviews(fallbackReviews)
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  // Auto slide
  useEffect(() => {
    if (reviews.length > 0) {
      const timer = setInterval(nextSlide, 5000)
      return () => clearInterval(timer)
    }
  }, [reviews.length])

  if (loading) {
    return (
      <section id="reviews" className="py-20 bg-gradient-to-b from-soft-pink/20 to-cream">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-soft-pink rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-soft-pink rounded w-64 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-soft-pink/20 to-cream relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-10 left-10 text-4xl opacity-30">⭐</div>
      <div className="absolute bottom-10 right-10 text-3xl opacity-30">💕</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">⭐</span>
          <h2 className="section-title">Khách Hàng Nói Gì?</h2>
          <p className="section-subtitle">Cảm ơn các bạn đã tin tưởng tiệm nhé! 💕</p>
        </div>

        {/* Reviews Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative">
            {reviews.length > 0 && (
              <div className="card text-center">
                <div className="text-2xl mb-3">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                <p className="text-warm-brown italic mb-4 text-lg">
                  "{reviews[currentIndex].review}"
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-rose">🌸</span>
                  <span className="font-medium text-soft-brown">
                    {reviews[currentIndex].name}
                  </span>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-soft-pink transition-colors"
              >
                ←
              </button>
              <div className="flex items-center gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentIndex ? 'bg-rose' : 'bg-soft-pink'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-soft-pink transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <div 
              key={index}
              className="card hover:-translate-y-1 transition-transform"
            >
              <div className="text-xl mb-3">
                {renderStars(review.rating)}
              </div>
              <p className="text-warm-brown italic mb-4">
                "{review.review}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-rose">🌸</span>
                  <span className="font-medium text-soft-brown">{review.name}</span>
                </div>
                <span className="text-sm text-warm-brown/60">
                  {new Date(review.date).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-warm-brown mb-4">
            Bạn đã từng làm nail tại tiệm? Hãy để lại đánh giá nhé! 💕
          </p>
          <a
            href="https://forms.gle/xxx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>✍️</span>
            <span>Viết đánh giá</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews
