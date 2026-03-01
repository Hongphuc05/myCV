import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Kinh nghiệm
        </motion.h2>

        <div className="timeline" ref={ref}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-dot" />
              <motion.div
                className="timeline-content"
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="timeline-date">{exp.period}</div>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-location">
                  <FiMapPin /> {exp.location}
                </p>
                <p>{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
