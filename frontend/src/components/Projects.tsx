import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiEye, FiSearch, FiLayers } from 'react-icons/fi';
import { MdLanguage, MdDirectionsBus } from 'react-icons/md';
import { BiCommentDetail } from 'react-icons/bi';
import { projects } from '../data/portfolioData';
import './Projects.css';

const iconMap: { [key: string]: React.ElementType } = {
  language: MdLanguage,
  bus: MdDirectionsBus,
  comments: BiCommentDetail,
  eye: FiEye,
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Compute all unique tags for filtering
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === 'All' || project.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-badge">Portfolio</span>
          <h2 className="projects-section-title">Dự án tiêu biểu</h2>
          <p className="projects-subtitle">Tìm kiếm dự án và lọc theo công nghệ sử dụng</p>
        </motion.div>

        {/* Filter & Search Bar */}
        <div className="projects-controls">
          <div className="search-input-wrapper">
            <FiSearch className="search-bar-icon" />
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              className="projects-search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="projects-filter-tags">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`filter-tag-btn ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag === 'All' ? <><FiLayers /> Tất cả</> : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <motion.div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = iconMap[project.icon] || FiEye;
              const isFeatured = index < 2; // Grid highlight
              
              return (
                <motion.div
                  key={project.title}
                  className={`project-card glass-card ${isFeatured ? 'featured' : ''}`}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  variants={cardVariants}
                  layout
                  whileHover={{ y: -6 }}
                >
                  <div className="project-glow-border" />
                  <div className="project-content">
                    <div className="project-top-row">
                      <div className="project-icon-glow-wrapper">
                        <Icon className="project-header-icon" />
                      </div>
                      <div className="project-meta-badges">
                        {isFeatured && <span className="featured-badge-static">Nổi bật</span>}
                        {project.params && <span className="params-badge-static">{project.params}</span>}
                      </div>
                    </div>

                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link btn btn-secondary"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiGithub /> GitHub Repository
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="projects-no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Không tìm thấy dự án nào phù hợp với bộ lọc hiện tại...
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
