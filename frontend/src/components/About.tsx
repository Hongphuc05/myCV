import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiTarget, FiCheck } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';
import { aboutInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Giới thiệu
        </motion.h2>

        <div className="about-grid" ref={ref}>
          {/* Main Card: Career Objectives */}
          <motion.div
            className="about-card main-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-header">
              <FiTarget className="card-icon glow-icon" />
              <h3>Mục tiêu nghề nghiệp</h3>
            </div>
            <p className="goal-text">{aboutInfo.goal}</p>
            <div className="intro-badges">
              <span className="intro-badge">Deep Learning</span>
              <span className="intro-badge">Computer Vision</span>
              <span className="intro-badge">MLOps</span>
              <span className="intro-badge">AI Deployment</span>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="about-card education-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-header">
              <IoSchoolOutline className="card-icon glow-icon" />
              <h3>Học vấn</h3>
            </div>
            <h4 className="school-name">{aboutInfo.education.school}</h4>
            <div className="school-details">
              <span className="school-major">{aboutInfo.education.major}</span>
              <span className="school-gpa">GPA: {aboutInfo.education.gpa}</span>
            </div>
            <p className="school-period">{aboutInfo.education.period}</p>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            className="about-card achievements-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-header">
              <FiAward className="card-icon glow-icon" />
              <h3>Thành tựu</h3>
            </div>
            <ul className="achievement-list">
              {aboutInfo.achievements.map((achievement, index) => (
                <li key={index}>
                  <FiCheck className="check-icon" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
