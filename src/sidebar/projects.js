import { projects } from '../project';

const navprojects = () => {
  const sidebarDiv = document.getElementById('sidebar');
  const projectsDiv = document.createElement('div');
  projectsDiv.setAttribute('id', 'projects-nav');

  sidebarDiv.appendChild(projectsDiv);

  const projectsTitle = document.createElement('div');
  projectsTitle.textContent = 'Projects';
  projectsTitle.setAttribute('id', 'projects-nav-title');

  projectsDiv.appendChild(projectsTitle);
  projects.projects.forEach((element) => {
    const project = document.createElement('div');
    project.setAttribute('class', 'nav-project');
    project.textContent = element.name;
    projectsDiv.appendChild(project);

    const id = document.createElement('div');
    id.setAttribute('class', 'invisible');
    id.textContent = element.id;
    project.appendChild(id);
  });
};

export { navprojects };
