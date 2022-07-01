import { project, addProject, projectID } from './project';

const init = () => {
  if (localStorage.projects) {
    const storedProjects = JSON.parse(localStorage.projects);
    for (let i = 0; i < storedProjects.projects.length; i += 1) {
      addProject(storedProjects.projects[i]);
    }
  } else {
    const defaultProject = new project('Default Project', [], projectID());
    addProject(defaultProject);
  }
};

export { init };
