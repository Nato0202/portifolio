import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="hero-avatar">
              <span className="hero-avatar-icon">👤</span>
            </div>
            <h1 className="hero-title">
              Olá, eu sou Renan
            </h1>
            <p className="hero-subtitle">
              Desenvolvedor Fullstack
            </p>
            <p className="hero-description">
              Apaixonado por criar soluções inovadoras e experiências digitais incríveis.
              Especializado em desenvolvimento web com foco em tecnologias modernas.
            </p>
            <div className="hero-buttons">
              <Link
                to="/projects"
                className="hero-button primary"
              >
                Ver Projetos
              </Link>
              <Link
                to="/contact"
                className="hero-button secondary"
              >
                Entre em Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="stats-grid"
          >
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Projetos Completados</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">2+</h3>
              <p className="stat-label">Anos de Experiência</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Tecnologias Dominadas</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
