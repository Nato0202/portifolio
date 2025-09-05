import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/" className="navbar-title">
              Meu Portfólio
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Início
            </Link>
            <Link to="/about" className="navbar-link">
              Sobre
            </Link>
            <Link to="/projects" className="navbar-link">
              Projetos
            </Link>
            <Link to="/contact" className="navbar-link">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
