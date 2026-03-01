# Portfolio - Nguyễn Trọng Hồng Phúc

Portfolio hiện đại được xây dựng với React + TypeScript + Vite, với giao diện tối giản và animations mượt mà.

## ✨ Tính năng

- 🎨 **Dark/Light Mode** - Chuyển đổi theme sáng/tối
- 🎭 **Animations** - Hiệu ứng động với Framer Motion
- 📱 **Responsive Design** - Tương thích mọi thiết bị
- ⚡ **Fast Performance** - Được xây dựng với Vite
- 🎯 **TypeScript** - Type-safe và dễ maintain
- 🎨 **Modern UI/UX** - Giao diện hiện đại, tối giản

## 🚀 Cài đặt

### Yêu cầu

- Node.js 16+ và npm/yarn/pnpm

### Các bước cài đặt

1. Clone repository hoặc vào thư mục frontend:

```bash
cd frontend
```

2. Cài đặt dependencies:

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

3. Chạy development server:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

4. Mở trình duyệt tại `http://localhost:3000`

## 📦 Build cho Production

```bash
npm run build
# hoặc
yarn build
# hoặc
pnpm build
```

Build output sẽ được tạo trong thư mục `dist/`

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Framer Motion** - Animations
- **React Icons** - Icon Library
- **React Intersection Observer** - Scroll Animations

## 📁 Cấu trúc thư mục

```
frontend/
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/           # Data files
│   │   └── portfolioData.ts
│   ├── types/          # TypeScript types
│   │   └── index.ts
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... */
}
```

### Cập nhật thông tin cá nhân

Chỉnh sửa file `src/data/portfolioData.ts` để cập nhật:
- Kỹ năng
- Dự án
- Kinh nghiệm
- Thông tin liên hệ

## 📄 License

© 2026 Nguyễn Trọng Hồng Phúc. All rights reserved.

## 📧 Liên hệ

- Email: hongphucnguyentrong@gmail.com
- GitHub: [@Hongphuc05](https://github.com/Hongphuc05)
- Phone: 0943914498
