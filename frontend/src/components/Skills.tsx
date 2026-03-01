import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCloud } from 'react-icons/fi';
import { SiRobotframework } from 'react-icons/si';
import { BiBrain } from 'react-icons/bi';
import { skillCategories } from '../data/portfolioData';
import { Skill } from '../types';
import './Skills.css';

const iconMap: { [key: string]: React.ElementType } = {
  brain: BiBrain,
  code: FiCode,
  robot: SiRobotframework,
  cloud: FiCloud,
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Kỹ năng
        </motion.h2>

        <div className="skills-grid" ref={ref}>
          {skillCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                custom={categoryIndex}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={categoryVariants}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="category-header">
                  <Icon className="category-icon" />
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-items">
                  {category.skills.map((skill: Skill, skillIndex: number) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
