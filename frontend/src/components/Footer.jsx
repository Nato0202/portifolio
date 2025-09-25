import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="footer"
    >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <a
              href="https://github.com/Nato0202"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/renan-nunes-1b148a370"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
          <p className="footer-text">
            © 2025 Meu Portfólio.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
