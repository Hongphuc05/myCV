import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MdLanguage, MdDirectionsBus } from 'react-icons/md';
import { BiCommentDetail } from 'react-icons/bi';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { useState } from 'react';
import './Projects.css';

const iconMap: { [key: string]: React.ElementType } = {
  language: MdLanguage,
  bus: MdDirectionsBus,
  comments: BiCommentDetail,
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (selectedProject?.demoImages) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.demoImages!.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject?.demoImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.demoImages!.length - 1 : prev - 1
      );
    }
  };

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Dự án nổi bật
        </motion.h2>

        <div className="projects-grid" ref={ref}>
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.div
                key={index}
                className="project-card"
                custom={index}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: 'var(--shadow-xl)' }}
                onClick={() => project.demoImages && handleOpenModal(project)}
                style={{ cursor: project.demoImages ? 'pointer' : 'default' }}
              >
                <div 
                  className="project-image"
                  style={{
                    backgroundImage: project.backgroundImage 
                      ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project.backgroundImage})`
                      : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {!project.backgroundImage && <Icon className="project-icon" />}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  {project.params && <p className="project-params">{project.params}</p>}
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub /> GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <FiX />
              </button>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-carousel">
                {selectedProject.demoImages && selectedProject.demoImages.length > 1 && (
                  <button 
                    className="carousel-btn carousel-btn-prev"
                    onClick={handlePrevImage}
                  >
                    <FiChevronLeft />
                  </button>
                )}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.demoImages?.[currentImageIndex]}
                    alt={`${selectedProject.title} demo ${currentImageIndex + 1}`}
                    className="modal-image"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                {selectedProject.demoImages && selectedProject.demoImages.length > 1 && (
                  <button 
                    className="carousel-btn carousel-btn-next"
                    onClick={handleNextImage}
                  >
                    <FiChevronRight />
                  </button>
                )}
              </div>
              {selectedProject.demoImages && selectedProject.demoImages.length > 1 && (
                <div className="carousel-indicators">
                  {selectedProject.demoImages.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
