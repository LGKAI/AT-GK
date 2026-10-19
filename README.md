# AT ♡ GK

Website (frontend-only) kỉ niệm tình yêu siêu dễ thương của **Anh Thư** và **Gia Khánh**.

🔗 **Demo Trực Tuyến:** [https://lgkai.github.io/AT-GK/](https://lgkai.github.io/AT-GK/)

---

## 📁 Cấu Trúc Thư Mục & Chức Năng

```text
bai39_project4_at-gk/
├── img/                   # Chứa hình ảnh (avatar, kỉ niệm, 10 địa điểm, 12 món ăn)
│   ├── favicon.jpg        # Avatar đại diện & Icon trang web
│   ├── start.jpg          # Ảnh trang chủ chào mừng
│   ├── story.jpg          # Ảnh phần lịch sử chuyện tình
│   ├── kiniem*.jpg        # Ảnh các sự kiện kỉ niệm đặc biệt
│   ├── sinhnhat*.jpg      # Ảnh sinh nhật Anh Thư & Gia Khánh
│   └── ...                # Ảnh các địa điểm và món ăn kỉ niệm
├── index.html             # Cấu trúc HTML chính (Header, Sidebar, Top-bar, 6 Section, Quiz)
├── style.css              # Toàn bộ CSS (Tone hồng pastel, Glassmorphism, Responsive)
├── script.js              # Logic JavaScript (Đếm ngày yêu, trái tim bay, chuyển tab, Quiz)
└── README.md              # Tài liệu hướng dẫn sử dụng & triển khai
```

- **`index.html`**: Khung sườn giao diện gồm Sidebar bên trái, Top-Bar cố định trên cùng, các mục nội dung và bài test trắc nghiệm.
- **`style.css`**: Giao diện màu hồng pastel, hiệu ứng chuyển động, thiết kế lưới ảnh 1:1 và chuẩn hoá responsive trên điện thoại.
- **`script.js`**: Tính ngày yêu từ 30/10/2025, tạo trái tim bay, đổi tab tức thì (không cuộn giật) và chấm điểm tự động.
- **`img/`**: Thư mục lưu trữ 29 hình ảnh kỉ niệm chất lượng cao.
- **`README.md`**: Thông tin tổng quan và hướng dẫn triển khai dự án.

---

## 🚀 Cách Triển Khai

### 1. Chạy trên máy tính (Local)
- **Cách đơn giản:** Nhấp đúp chuột vào file `index.html` để mở trực tiếp trên trình duyệt.
- **Dùng Live Server (VS Code):** Chuột phải vào `index.html` -> Chọn **Open with Live Server**.
- **Dùng Python:** Chạy lệnh `python -m http.server 8080` rồi vào `http://localhost:8080`.

### 2. Đưa lên GitHub Pages (Miễn phí)
1. Đẩy code lên GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
2. Trên GitHub, vào **Settings** -> chọn tab **Pages**.
3. Tại **Build and deployment**, mục **Branch** chọn `main` (folder `/root`) -> Nhấn **Save**.
4. Chờ 1 phút để trang web cập nhật tại: `https://lgkai.github.io/AT-GK/`.

---

*Made with 💝 for Anh Thư by Gia Khánh*