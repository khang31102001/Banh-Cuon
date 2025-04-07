# 🎉 Dự án Website Giao Diện UI Hiện Đại (Vite + React + Tailwind)

Đây là một dự án giao diện website được xây dựng bằng các công nghệ hiện đại như React, Vite, Tailwind CSS và shadcn-ui.  
Bạn **không cần biết lập trình** vẫn có thể làm theo hướng dẫn để chạy hoặc triển khai trang web này lên internet.

---

## 🚀 Cách chạy website trên máy tính của bạn

### 1. Cài đặt Node.js

- Truy cập: https://nodejs.org/
- Tải phiên bản **LTS** (gợi ý cho người không chuyên)

### 2. Cài đặt thư viện

Mở terminal (cmd hoặc terminal trong VSCode), gõ lệnh:

npm install
Lệnh này sẽ cài đặt tất cả các thư viện cần thiết để website hoạt động.

3. Chạy website

npm run dev
Sau đó mở trình duyệt và truy cập địa chỉ:


http://localhost:5050
📦 Xuất bản website (dành cho triển khai)
Để tạo bản xuất bản (production):

npm run build
File sẽ được xuất ra thư mục dist/.
Bạn có thể dùng thư mục này để:

Đưa lên hosting hoặc server bất kỳ

Deploy qua Vercel / Netlify / Firebase

🛠️ Công nghệ sử dụng trong dự án
Vite – công cụ build siêu nhanh thay thế Create React App

React – thư viện xây dựng giao diện người dùng

TypeScript – ngôn ngữ giúp code rõ ràng, an toàn hơn

Tailwind CSS – framework CSS hiện đại, dễ tuỳ biến

shadcn-ui – bộ giao diện được build từ Radix UI

Lucide Icons – bộ icon đẹp và nhẹ

React Router DOM – điều hướng trang

React Hook Form + Zod – quản lý form & validate dữ liệu

TanStack React Query – quản lý dữ liệu từ API hiệu quả

Sonner – hiển thị thông báo đẹp (toast)

cmdk / embla-carousel / vaul – nâng cao trải nghiệm người dùng

📁 Cấu trúc và file cấu hình chính
Tên file	Vai trò
vite.config.ts	⚡ Cấu hình Vite: plugin, server, alias
tailwind.config.ts	🎨 Cấu hình màu sắc, animation... của Tailwind
postcss.config.js	🔧 Kết nối Tailwind với trình biên dịch CSS
tsconfig.json	⚙️ Thiết lập môi trường TypeScript
components.json	📦 Quản lý các thành phần UI đã thêm từ shadcn-ui
.gitignore	🧹 Bỏ qua các file không cần thiết khi đẩy code lên GitHub
🌍 Cách triển khai website lên internet (hosting)
Bạn có thể deploy lên các nền tảng miễn phí sau:

👉 Vercel (đề xuất)
Truy cập https://vercel.com

Đăng nhập bằng GitHub

Chọn repository chứa dự án này

Vercel sẽ tự động nhận dạng là dự án Vite + React

Nhấn "Deploy" và đợi vài giây để hoàn tất

Hoặc bạn có thể dùng:

Netlify: https://netlify.com

Firebase Hosting: https://firebase.google.com/docs/hosting

Ghi chú cho Developer
Cấu trúc component tách biệt, dễ mở rộng

UI được xây dựng dựa trên shadcn/ui (Radix + Tailwind)

Bạn có thể thêm component mới bằng npx shadcn-ui@latest ad# Banh-Cuon
