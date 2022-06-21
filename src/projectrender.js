import { render } from './render.js';

const projectRender = ((project) => {
    let contentContainer = document.getElementById('content');

    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('id', 'project-container');

    let projectTitle = document.createElement('div');
    projectTitle.setAttribute('class', 'project-title');
    projectTitle.textContent = `${project.name}`;

    contentContainer.appendChild(projectDiv);
    projectDiv.appendChild(projectTitle);

    render.renderToDos(project, projectDiv);

});

export { projectRender };