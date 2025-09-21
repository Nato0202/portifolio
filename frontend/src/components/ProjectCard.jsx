import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="project-card"
    >
      <div className="project-image">
        <span className="project-image-text">Imagem do Projeto</span>
      </div>
      <div className="project-content">
        <h3 className="project-title">
          {project.title}
        </h3>
        <p className="project-description">
          {project.description}
        </p>
        <div className="project-tags">
          {project.tags && project.tags.length > 0 && project.tags.map((tag, index) => (
            <span
              key={index}
              className="project-tag"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            GitHub
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link demo-link"
          >
            Demo
          </a>
          <Link
            to={`/projects/${project.id}`}
            className="project-link details-link"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
