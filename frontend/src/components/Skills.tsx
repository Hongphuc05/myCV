import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const getSkillColor = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('python')) return '#3776ab';
  if (n.includes('pytorch') || n.includes('tensorflow') || n.includes('deep learning')) return '#ee4c2c';
  if (n.includes('fastapi') || n.includes('spring boot') || n.includes('restful')) return '#10b981';
  if (n.includes('docker')) return '#2496ed';
  if (n.includes('selenium') || n.includes('playwright') || n.includes('scraping')) return '#06b6d4';
  if (n.includes('git')) return '#f05032';
  if (n.includes('aws') || n.includes('gcp') || n.includes('cloud')) return '#ff9900';
  return '#6366f1';
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-badge">Capabilities</span>
          <h2 className="skills-section-title">Kỹ năng & Công nghệ</h2>
          <p className="skills-subtitle">Click vào các nhóm kỹ năng để xem chi tiết hoặc rê chuột vào các công nghệ</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="skills-tabs">
          <button 
            className={`tab-btn ${activeCategory === null ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            Tất cả
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`tab-btn ${activeCategory === idx ? 'active' : ''}`}
              onClick={() => setActiveCategory(idx)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          <AnimatePresence mode="popLayout">
            {skillCategories.map((category, categoryIndex) => {
              if (activeCategory !== null && activeCategory !== categoryIndex) {
                return null;
              }
              const Icon = iconMap[category.icon];
              return (
                <motion.div
                  key={categoryIndex}
                  className="skill-category glass-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  layout
                >
                  <div className="category-header">
                    <div className="icon-wrapper">
                      <Icon className="category-icon" />
                    </div>
                    <h3>{category.title}</h3>
                  </div>
                  
                  <div className="skill-items-grid">
                    {category.skills.map((skill: Skill, skillIndex: number) => {
                      const color = getSkillColor(skill.name);
                      return (
                        <motion.div 
                          key={skillIndex} 
                          className="skill-badge-item"
                          whileHover={{ y: -3, scale: 1.02 }}
                          style={{ 
                            border: `1px solid var(--border-color)`,
                            '--hover-border': color,
                            '--hover-shadow': `${color}1a`
                          } as React.CSSProperties}
                        >
                          <span className="skill-dot" style={{ backgroundColor: color }} />
                          {skill.name}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
