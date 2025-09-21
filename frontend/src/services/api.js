import projectsData from '../data/projects.json';

// Simular delay de API para manter a experiência
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getProjects = async () => {
  // Simular delay de rede
  await delay(500);
  return projectsData;
};

export const getProjectById = async (id) => {
  // Simular delay de rede
  await delay(300);
  const project = projectsData.find(p => p.id === parseInt(id));
  if (!project) {
    throw new Error('Project not found');
  }
  return project;
};

export const sendContactMessage = async (messageData) => {
  // Simular delay de rede
  await delay(1000);

  // Simular diferentes cenários de resposta
  if (!messageData.name || !messageData.email || !messageData.message) {
    throw new Error('Todos os campos são obrigatórios');
  }

  // Simular sucesso no envio
  return {
    success: true,
    message: 'Mensagem enviada com sucesso! (Simulação)'
  };
};
