// PHẦN 1: TẠO HIỆU ỨNG TRÁI TIM BAY LÊN
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bubble');
    
    // Đổi linh hoạt giữa các biểu tượng dễ thương
    const hearts = ['💖', '💕', '💓', '💗', '🍬', '🍫'];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Vị trí ngang ngẫu nhiên
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Thời gian bay và kích thước ngẫu nhiên
    const animationDuration = Math.random() * 3 + 4; // Từ 4s đến 7s
    heart.style.animationDuration = animationDuration + 's';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px'; // Từ 15px đến 35px
    
    heartsContainer.appendChild(heart);
    
    // Tự động xóa trái tim sau khi bay xong để web không bị nặng
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

// Cứ mỗi 300ms (0.3 giây) tạo ra 1 trái tim mới
setInterval(createHeart, 300);


// PHẦN 2: CHẤM ĐIỂM BÀI TRẮC NGHIỆM
document.getElementById('loveQuiz').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn trang web tự động tải lại khi bấm nộp bài
    
    // ĐÁP ÁN ĐÚNG CỦA 10 CÂU HỎI
    const answers = {
        q1: "true",
        q2: "true",
        q3: "true",
        q4: "true",
        q5: "true",
        q6: "true",
        q7: "true",
        q8: "true",
        q9: "true",
        q10: "true"
    };
    
    let score = 0;
    const totalQuestions = 10;
    const formData = new FormData(this);
    
    // Kiểm tra từng câu hỏi và hiển thị đáp án đúng sai
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = formData.get('q' + i);
        if (userAnswer === answers['q' + i]) {
            score++;
        }
        
        // Đánh dấu đúng/sai trực tiếp lên giao diện
        const correctVal = answers['q' + i];
        const labels = document.querySelectorAll(`input[name="q${i}"]`);
        labels.forEach(radio => {
            const parent = radio.parentElement;
            
            // Xóa dấu vết cũ nếu nộp bài nhiều lần
            parent.classList.remove('correct-text', 'wrong-text');
            const oldSpan = parent.querySelector('.indicator');
            if (oldSpan) oldSpan.remove();

            const span = document.createElement('span');
            span.className = 'indicator';
            
            if (radio.value === correctVal) {
                parent.classList.add('correct-text');
                span.innerText = ' ✅';
                parent.appendChild(span);
            } else if (radio.checked) {
                parent.classList.add('wrong-text');
                span.innerText = ' ❌';
                parent.appendChild(span);
            }
        });
    }
    
    // Hiển thị kết quả
    const resultBox = document.getElementById('quiz-result');
    resultBox.style.display = 'block';
    
    if (score > 5) {
        resultBox.style.backgroundColor = '#d4edda';
        resultBox.style.color = '#155724';
        resultBox.innerHTML = `🎉 Chúc mừng, bạn trả lời đúng ${score}/10 câu. Bạn đích thị là một Fan cứng của tụi tui gòi! 💖`;
    } else {
        resultBox.style.backgroundColor = '#f8d7da';
        resultBox.style.color = '#721c24';
        resultBox.innerHTML = `😅 Bạn trả lời đúng ${score}/10 câu. Hình như bạn chưa quá am hiểu về tình yêu của tụi tui gòi, cố gắng tìm hiểu thêm nhia! 🍬`;
    }
});

// PHẦN 3: ĐIỀU HƯỚNG MENU (BẤM MỚI HIỆN NỘI DUNG)
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.container section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn trang web bị giật khi bấm link

        // 1. Ẩn tất cả các mục đi
        sections.forEach(sec => {
            sec.classList.remove('active-section');
            sec.classList.add('hidden-section');
        });

        // 2. Lấy tên mục mà người dùng vừa bấm (ví dụ: #history)
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // 3. Hiện đúng mục đó lên
        if (targetSection) {
            targetSection.classList.remove('hidden-section');
            targetSection.classList.add('active-section');
        }
        
        // 4. Cuộn màn hình lên đầu nhẹ nhàng
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});