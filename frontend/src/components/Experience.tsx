import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiBriefcase } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Scroll tracking for vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const renderAchievement = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s)]+|www\.[^\s)]+)/g;
    const parts = text.split(urlRegex);
    if (parts.length === 1) return text;

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        const href = part.startsWith('http') ? part : `https://${part}`;
        return (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="timeline-link">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section id="experience" className="experience" ref={containerRef}>
      <div className="container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="exp-badge">Journey</span>
          <h2 className="exp-title">Kinh nghiệm làm việc</h2>
        </motion.div>

        <div className="timeline-container" ref={ref}>
          {/* Animated vertical track line */}
          <div className="timeline-track-bg" />
          <motion.div 
            className="timeline-track-fill" 
            style={{ scaleY, originY: 0 }}
          />

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot-glow" />
                  <div className="timeline-dot">
                    <FiBriefcase className="timeline-icon" />
                  </div>
                </div>
                
                <motion.div
                  className="timeline-content glass-card"
                  whileHover={{ y: -4 }}
                >
                  <div className="timeline-header-meta">
                    <span className="timeline-date">{exp.period}</span>
                    <span className="timeline-location">
                      <FiMapPin /> {exp.location}
                    </span>
                  </div>
                  
                  <h3>{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-desc">{exp.description}</p>
                  
                  <div className="timeline-achievements-title">Kết quả đạt được:</div>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>
                        <span className="bullet-point" />
                        <span>{renderAchievement(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
