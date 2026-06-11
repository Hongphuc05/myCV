import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import './Blog.css';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    {
      title: 'Fine-tuning ConvNeXt: Hướng tiếp cận thực tế cho phát hiện đối tượng',
      excerpt: 'Làm thế nào để tinh chỉnh mô hình ConvNeXt từ đầu cho tác vụ phát hiện vật thể với tập dữ liệu tùy chỉnh gồm 5 nhãn khác nhau đạt mAP cao.',
      date: '10/05/2026',
      readTime: '6 phút đọc',
      tags: ['Computer Vision', 'ConvNeXt', 'PyTorch'],
    },
    {
      title: 'Xây dựng Transformer từ đầu: Tại sao bạn nên thử?',
      excerpt: 'Tự code các khối Multi-Head Attention, Feed Forward và Positional Encoding để hiểu cặn kẽ cơ chế học sâu của kiến trúc NLP hiện đại này.',
      date: '28/04/2026',
      readTime: '8 phút đọc',
      tags: ['NLP', 'Transformer', 'PyTorch'],
    },
    {
      title: 'Triển khai MLOps trên thiết bị Edge: Thách thức và Giải pháp',
      excerpt: 'Tối ưu hóa dung lượng mô hình qua lượng tử hóa (Quantization) và chuyển đổi sang định dạng ONNX/TensorRT để chạy trực tiếp trên thiết bị nhúng Jetson Nano.',
      date: '12/03/2026',
      readTime: '5 phút đọc',
      tags: ['MLOps', 'ONNX', 'Edge AI'],
    },
  ];

  return (
    <section id="blog" className="blog-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="blog-badge">Knowledge Base</span>
          <h2 className="blog-title">Bài viết chia sẻ</h2>
        </motion.div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className="blog-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="blog-content">
                <div className="blog-top">
                  <div className="blog-tags">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="blog-time">
                    <FiClock className="time-icon" /> {post.readTime}
                  </span>
                </div>

                <h3 className="blog-card-title">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                  <a href="#" className="blog-read-link">
                    Đọc tiếp <FiArrowRight className="arrow-icon" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
