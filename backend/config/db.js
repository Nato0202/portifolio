const fs = require('fs');
const path = require('path');

// Path to data files
const projectsFile = path.join(__dirname, '../data/projects.json');
const messagesFile = path.join(__dirname, '../data/messages.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Helper functions for JSON file operations
const readJSONFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeJSONFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Projects data
const getProjects = () => readJSONFile(projectsFile);
const saveProjects = (projects) => writeJSONFile(projectsFile, projects);

// Messages data
const getMessages = () => readJSONFile(messagesFile);
const saveMessages = (messages) => writeJSONFile(messagesFile, messages);

module.exports = {
  getProjects,
  saveProjects,
  getMessages,
  saveMessages
};
