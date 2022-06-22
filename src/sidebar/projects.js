import { projects } from '../project.js';

const navprojects = (() => {
    let sidebarDiv = document.getElementById('sidebar');
    let projectsDiv = document.createElement('div');
    projectsDiv.setAttribute('id', 'projects-nav');

    sidebarDiv.appendChild(projectsDiv)

    let projectsTitle = document.createElement('div');
    projectsTitle.textContent = 'Projects';
    projectsTitle.setAttribute('id', 'projects-nav-title');

    projectsDiv.appendChild(projectsTitle);
    projects.projects.forEach(element => {
        let project = document.createElement('div');
        project.setAttribute('class', 'nav-project');
        project.textContent = element.name;
        projectsDiv.appendChild(project);
        });
    });


export { navprojects };