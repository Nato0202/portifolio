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
          <p className="footer-text">
            © 2024 Meu Portfólio.
          </p>
          <div className="footer-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:seuemail@example.com"
              className="footer-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
