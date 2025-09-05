// Project model class
class Project {
  constructor(id, title, description, tags, githubUrl, demoUrl, imageUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.githubUrl = githubUrl;
    this.demoUrl = demoUrl;
    this.imageUrl = imageUrl;
  }

  // Static method to create project from JSON data
  static fromJSON(data) {
    return new Project(
      data.id,
      data.title,
      data.description,
      data.tags,
      data.githubUrl,
      data.demoUrl,
      data.imageUrl
    );
  }

  // Method to convert to JSON
  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      tags: this.tags,
      githubUrl: this.githubUrl,
      demoUrl: this.demoUrl,
      imageUrl: this.imageUrl
    };
  }
}

module.exports = Project;
