const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// GET /projects - get all projects
router.get('/', projectsController.getAllProjects);

// GET /projects/:id - get project by id
router.get('/:id', projectsController.getProjectById);

module.exports = router;
