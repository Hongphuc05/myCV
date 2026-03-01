import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiTarget } from 'react-icons/fi';
import { IoSchoolOutline } from 'react-icons/io5';
import { aboutInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Về tôi
        </motion.h2>

        <div className="about-content" ref={ref}>
          <motion.div
            className="info-card"
            custom={0}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: 'var(--shadow-xl)' }}
          >
            <IoSchoolOutline className="card-icon" />
            <h3>Học vấn</h3>
            <p>{aboutInfo.education.school}</p>
            <p className="highlight">
              {aboutInfo.education.major} - GPA: {aboutInfo.education.gpa}
            </p>
            <p className="date">{aboutInfo.education.period}</p>
          </motion.div>

          <motion.div
            className="info-card"
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: 'var(--shadow-xl)' }}
          >
            <FiAward className="card-icon" />
            <h3>Thành tựu</h3>
            <ul>
              {aboutInfo.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="info-card"
            custom={2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: 'var(--shadow-xl)' }}
          >
            <FiTarget className="card-icon" />
            <h3>Mục tiêu</h3>
            <p>{aboutInfo.goal}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
