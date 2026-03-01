import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { contactInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems = [
    { icon: FiPhone, text: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: FiMail, text: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: FiMapPin, text: contactInfo.location, href: null },
  ];

  const socialLinks = [
    { icon: FiGithub, href: contactInfo.github },
    { icon: FiLinkedin, href: contactInfo.linkedin },
    { icon: FiMail, href: `mailto:${contactInfo.email}` },
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
          Liên hệ
        </motion.h2>

        <div className="contact-content" ref={ref}>
          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Hãy kết nối với tôi!
          </motion.p>

          <div className="contact-items">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="contact-icon" />
                  <span>{item.text}</span>
                </>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      className="contact-item"
                      whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      className="contact-item"
                      whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                    >
                      {content}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

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
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.6, type: 'spring' }}
                  whileHover={{ y: -5, rotate: 360 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
