import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { contactInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems = [
    { icon: FiMail, label: 'Email', text: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: FiPhone, label: 'Điện thoại', text: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: FiMapPin, label: 'Địa điểm', text: contactInfo.location, href: null },
  ];

  const socialLinks = [
    { icon: FiGithub, href: contactInfo.github, color: '#f0f6fc', label: 'GitHub' },
    { icon: FiLinkedin, href: contactInfo.linkedin, color: '#0a66c2', label: 'LinkedIn' },
    { icon: FiMail, href: `mailto:${contactInfo.email}`, color: '#ea4335', label: 'Email' },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Liên hệ với tôi
        </motion.h2>

        <div className="contact-card glass-card" ref={ref}>
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="panel-header">
              <FiSend className="panel-icon glow-icon" />
              <h3>Hãy kết nối để cùng phát triển</h3>
              <p>Tôi luôn cởi mở để thảo luận về các cơ hội hợp tác, dự án AI/Phần mềm hoặc nghiên cứu thú vị.</p>
            </div>

            <div className="contact-list">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const innerContent = (
                  <>
                    <div className="item-icon-wrapper">
                      <Icon className="item-icon" />
                    </div>
                    <div className="item-details">
                      <span className="item-label">{item.label}</span>
                      <span className="item-text">{item.text}</span>
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.href ? (
                      <a href={item.href} className="contact-detail-item">
                        {innerContent}
                      </a>
                    ) : (
                      <div className="contact-detail-item no-link">
                        {innerContent}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="contact-social-bar">
              <h4>Mạng xã hội</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={link.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
