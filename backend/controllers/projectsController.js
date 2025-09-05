const { getProjects } = require('../config/db');

// GET /projects - get all projects
const getAllProjects = (req, res) => {
  try {
    const projects = getProjects();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET /projects/:id - get project by id
const getProjectById = (req, res) => {
  try {
    const projects = getProjects();
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllProjects,
  getProjectById
};
