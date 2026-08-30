import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const texts = [
    'AI Engineer',
    'Computer Vision Specialist',
    'Deep Learning Engineer',
    'MLOps Practitioner',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500); // Wait longer on full text
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge-dot" />
              <span>Sẵn sàng cho các cơ hội mới</span>
            </motion.div>

            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Xin chào, tôi là
            </motion.p>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Nguyễn Trọng Hồng Phúc
            </motion.h1>

            <motion.h2
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="typing-text-gradient">{text}</span>
              <span className="cursor">|</span>
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Tôi là sinh viên ngành Trí tuệ nhân tạo, có nền tảng về Machine Learning, phát triển phần mềm và các công cụ tự động hóa. Tôi mong muốn được tham gia vào môi trường làm việc thực tế để áp dụng kiến thức AI, xây dựng hệ thống phần mềm và triển khai các giải pháp tự động hóa nhằm giải quyết bài toán doanh nghiệp. Trong dài hạn, tôi định hướng phát triển trở thành AI Engineer có khả năng thiết kế, phát triển và vận hành các hệ thống thông minh ở môi trường production.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="/Hongphuc_cv.pdf"
                download="Hongphuc_cv.pdf"
                className="btn btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload /> Tải CV của tôi
              </motion.a>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('projects')}
              >
                <FiArrowRight /> Dự án
              </motion.button>

              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
              >
                <FiMail /> Liên hệ
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <div className="profile-aura" />
              <motion.div
                className="profile-image-wrapper glass-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/cv_pic.jpg" 
                  alt="Nguyễn Trọng Hồng Phúc" 
                  className="profile-image"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="mouse">
            <motion.div
              className="wheel"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
