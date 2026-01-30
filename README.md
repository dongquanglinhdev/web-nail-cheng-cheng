# Tiệm Nhà Chan - Nail Salon Website

Website cá nhân cho tiệm nail "Tiệm nhà Chan" - được xây dựng với React + Vite + Tailwind CSS.

## 🌸 Tính năng

- ✅ Responsive design (Mobile-first)
- ✅ Single-page layout với smooth scrolling
- ✅ Hero section với animations
- ✅ Giới thiệu tiệm
- ✅ Dịch vụ & Bảng giá
- ✅ Gallery mẫu nail với modal
- ✅ Đánh giá khách hàng (từ Google Sheet)
- ✅ Đặt lịch (Google Form)
- ✅ Blog / Tin tức
- ✅ Liên hệ với Google Maps
- ✅ Floating contact button

## 🚀 Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

## 📝 Cấu hình

### 1. Thông tin liên hệ
Cập nhật thông tin trong các file:
- `src/components/Contact.jsx` - Địa chỉ, SĐT, links
- `src/components/Booking.jsx` - Google Form URL, Zalo
- `src/components/FloatingButton.jsx` - Links liên hệ nhanh
- `src/components/Footer.jsx` - Thông tin footer

### 2. Google Sheet cho Reviews
1. Tạo Google Sheet với cột: name, review, rating, date
2. Publish sheet: File → Share → Publish to web
3. Cập nhật `SHEET_ID` trong `src/components/Reviews.jsx`

### 3. Google Form cho Booking
1. Tạo Google Form với các field cần thiết
2. Lấy embed URL và link
3. Cập nhật trong `src/components/Booking.jsx`

### 4. Google Maps
1. Lấy embed code từ Google Maps
2. Cập nhật trong `src/components/Contact.jsx`

### 5. Ảnh
Thay thế placeholders bằng ảnh thật trong:
- `src/components/About.jsx` - Ảnh chủ tiệm
- `src/components/Gallery.jsx` - Ảnh mẫu nail

## 🌐 Deploy lên GitHub Pages

1. Update `base` trong `vite.config.js`:
```js
base: '/your-repo-name/',
```

2. Build và deploy:
```bash
npm run build
```

3. Push folder `dist` lên branch `gh-pages` hoặc sử dụng GitHub Actions.

## 🎨 Màu sắc

| Tên | Hex |
|-----|-----|
| Soft Pink | #FFE4EC |
| Rose | #F8A5B8 |
| Lavender | #E8D5E7 |
| Mint | #D4EDDA |
| Cream | #FFF8F0 |
| Soft Brown | #8B7355 |

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 💕 Credits

Made with love for Tiệm nhà Chan 🌸
