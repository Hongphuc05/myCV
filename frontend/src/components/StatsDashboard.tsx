import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BiBrain, BiGitBranch, BiTrophy } from 'react-icons/bi';
import { FiDatabase } from 'react-icons/fi';
import './StatsDashboard.css';

const StatsDashboard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      id: 'models',
      label: 'Mô hình AI huấn luyện',
      value: '15+',
      description: 'ConvNeXt, YOLOv8, Transformer, FaceNet',
      icon: BiBrain,
      glowColor: 'rgba(139, 92, 246, 0.15)', // Purple
      gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    },
    {
      id: 'data',
      label: 'Dữ liệu đã tiền xử lý',
      value: '180 GB+',
      description: 'Dữ liệu ảnh, văn bản y tế, camera giao thông',
      icon: FiDatabase,
      glowColor: 'rgba(6, 182, 212, 0.15)', // Cyan
      gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
    },
    {
      id: 'commits',
      label: 'GitHub Contributions',
      value: '900+',
      description: 'Lưu trữ mã nguồn chất lượng cao',
      icon: BiGitBranch,
      glowColor: 'rgba(99, 102, 241, 0.15)', // Indigo
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    },
    {
      id: 'accuracy',
      label: 'Độ chính xác trung bình',
      value: '94.6%',
      description: 'Đánh giá trên bộ test chuyên biệt',
      icon: BiTrophy,
      glowColor: 'rgba(16, 185, 129, 0.15)', // Emerald
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4)',
    },
  ];

  return (
    <section id="stats" className="stats-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="stats-badge">Personal Analytics</span>
          <h2 className="stats-section-title">Chỉ số hoạt động</h2>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="stat-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ '--glow-color': stat.glowColor } as React.CSSProperties}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="stat-glow-effect" />
                <div className="stat-card-content">
                  <div className="stat-top">
                    <div className="stat-icon-wrapper" style={{ background: stat.glowColor }}>
                      <Icon className="stat-icon" style={{ fill: 'none', stroke: 'none' }} />
                    </div>
                    <span className="stat-value-gradient" style={{ backgroundImage: stat.gradient }}>
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="stat-label">{stat.label}</h3>
                  <p className="stat-desc">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
