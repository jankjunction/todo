import clearDiv from './clearDiv';
import events from './events';

const projects = (() => {
  let projects = [];

  return {
    projects,
  };
})();

function projectID() {
  const id = window.crypto.randomUUID();
  return id;
}

class project {
  constructor(name, todos) {
    this.name = name;
    this.todos = todos;
    this.id = projectID();
  }
}

const addProject = (proj) => {
  projects.projects.push(proj);

  const projectsNav = document.getElementById('projects-nav');
  events.emit('Project Added', projectsNav);
};

const deleteProject = (proj) => {
  for (let i = 0; i < projects.projects.length; i += 1) {
    if (projects.projects[i] === proj) {
      projects.projects.splice(i, 1);
      const projectContainer = document.getElementById('project-container');
      clearDiv(projectContainer);
      const projectsNav = document.getElementById('projects-nav');
      events.emit('Project Deleted', projectsNav);
      const resultingProjects = projects.projects;
      events.emit('Render After Project Delete', resultingProjects[0]);
    }
  }
};

const getCurrentProject = () => {
  const currentProjectName =
    document.getElementById('project-container').firstElementChild.textContent;
  for (let i = 0; i < projects.projects.length; i += 1) {
    if (currentProjectName === projects.projects[i].id) {
      return projects.projects[i];
    }
  }
};

const editProjectAttribute = (data) => {
  const id = data[0];
  const attr = data[1];
  const newAttrValue = data[2];
  for (let i = 0; i < projects.projects.length; i += 1) {
    if (projects.projects[i].id === id) {
      projects.projects[i][`${attr}`] = newAttrValue;
    }
  }
};

export {
  project,
  projects,
  addProject,
  getCurrentProject,
  projectID,
  editProjectAttribute,
  deleteProject,
};
