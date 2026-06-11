import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import './Certificates.css';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: 'Top 10% Naver Hackathon',
      issuer: 'Naver Vietnam & UET',
      date: '10/2020',
      description: 'Phát triển mô hình Deep Learning nhận dạng vật thể và hành vi bất thường trong hệ thống an ninh giám sát thông minh.',
      link: '#',
    },
    {
      title: 'Giải khuyến khích UET Makathon',
      issuer: 'Trường Đại học Công nghệ - ĐHQGHN',
      date: '11/2019',
      description: 'Thiết kế hệ thống thiết bị IoT giám sát và cảnh báo rò rỉ khí gas tích hợp mạng nơ-ron đánh giá độ rủi ro cháy nổ.',
      link: '#',
    },
    {
      title: 'Chứng chỉ Deep Learning Specialization',
      issuer: 'DeepLearning.AI / Coursera',
      date: '05/2023',
      description: 'Nắm vững lý thuyết mạng nơ-ron (RNN, CNN, Transformers) và thực hành xây dựng mô hình học sâu chuyên sâu.',
      link: '#',
    },
  ];

  return (
    <section id="certificates" className="certs-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="certs-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="certs-badge">Chứng chỉ & Giải thưởng</span>
          <h2 className="certs-title">Thành tựu nổi bật</h2>
        </motion.div>

        <div className="certs-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="cert-glow" />
              <div className="cert-content">
                <div className="cert-top">
                  <div className="cert-icon-box">
                    <FiAward className="cert-icon" />
                  </div>
                  <span className="cert-date">
                    <FiCalendar className="calendar-icon" /> {cert.date}
                  </span>
                </div>

                <h3 className="cert-card-title">{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>
                <p className="cert-desc">{cert.description}</p>

                <div className="cert-footer">
                  <a href={cert.link} className="cert-link">
                    Xem chứng nhận <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
