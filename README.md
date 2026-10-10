# AT ♡ GK - Tình Yêu Socola Kẹo Mút

Website kỉ niệm tình yêu của **Anh Thư** và **Gia Khánh**

🔗 **Demo Trực Tuyến:** [https://lgkai.github.io/AT-GK/](https://lgkai.github.io/AT-GK/)

---

## 📁 Cấu Trúc & Chức Năng File/Folder

- **`index.html`**: Cấu trúc nội dung toàn bộ website (Header mobile, Sidebar menu, Top-bar cố định, các section nội dung và Form trắc nghiệm).
- **`style.css`**: Toàn bộ giao diện màu hồng pastel, hiệu ứng kính mờ (glassmorphism), hoạt ảnh (animation) và chuẩn hoá responsive trên điện thoại/tablet.
- **`script.js`**: Logic tương tác gồm:
  - Tự động tính số ngày yêu từ mốc **30/10/2025**.
  - Hiệu ứng bong bóng trái tim/kẹo ngọt bay ngẫu nhiên.
  - Điều hướng chuyển trang mượt mà (không bị cuộn giật).
  - Đóng/mở menu ngăn kéo trên di động.
  - Tự động chấm điểm bài test fan cứng 10 câu.
- **`img/`**: Thư mục lưu trữ hình ảnh (avatar vuông `favicon.jpg`, ảnh bìa, các sự kiện, 10 địa điểm và 12 món ăn kỉ niệm).
- **`README.md`**: Hướng dẫn thông tin dự án và cách triển khai.

---

## ✨ Tính Năng Chính

- **Đếm ngày yêu:** Hiển thị số ngày bên nhau cập nhật theo thời gian thực.
- **Top-Bar cố định:** Thanh trạng thái gắn cố định trên cùng khi lướt trang.
- **Bộ sưu tập kỉ niệm:** Lưu giữ các sự kiện đặc biệt, địa điểm và món ăn gắn bó cùng nhau.
- **Góc âm nhạc:** Nhúng nhạc rap do chính Gia Khánh sáng tác tặng Anh Thư.
- **Bài test Fan cứng:** Trắc nghiệm 10 câu hỏi chấm điểm vui nhộn.
- **Chuẩn hoá di động:** Giao diện tối ưu hoàn hảo trên màn hình smartphone (thẳng hàng, chữ rõ nét, nút bấm to dễ chạm).

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
4. Chờ 1 phút để trang web cập nhật tại: `https://<username>.github.io/<repo-name>/`.

---

*Made with 💝 for Anh Thư by Gia Khánh*