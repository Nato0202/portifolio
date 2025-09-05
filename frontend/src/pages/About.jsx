import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="about-title"
      >
        Sobre Mim
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="about-paragraph"
      >
        Sou um desenvolvedor fullstack apaixonado por criar soluções inovadoras e eficientes.
        Tenho experiência em desenvolvimento frontend e backend, utilizando tecnologias modernas
        para entregar produtos de alta qualidade.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="about-paragraph"
      >
        Cursos e Habilidades:
      </motion.p>
      <ul className="about-list">
        <li>JavaScript, React, Vite, CSS</li>
        <li>Node.js, Express, SQLite</li>
        <li>Git, GitHub, Metodologias Ágeis</li>
        <li>Comunicação, Trabalho em equipe, Resolução de problemas</li>
      </ul>
    </div>
  );
};

export default About;
