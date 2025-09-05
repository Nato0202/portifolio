import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../services/api';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (err) {
        setError('Erro ao carregar projeto');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <div className="text-xl">Carregando projeto...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600">{error || 'Projeto não encontrado'}</div>
      </div>
    );
  }

  return (
    <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-xl">Imagem do Projeto</span>
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 mb-6">{project.description}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Links</h2>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                GitHub
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Demo
              </a>
            </div>
          </div>

          <Link
            to="/projects"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            ← Voltar aos Projetos
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
