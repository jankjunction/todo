import { render } from './render.js';

const projectRender = ((project) => {
    let contentContainer = document.getElementById('content');

    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('id', 'project-container');


    let newTodo = document.createElement('span');
    newTodo.setAttribute('id', 'new-todo');
    newTodo.textContent = '+ new todo';

    let projectTitle = document.createElement('div');
    projectTitle.setAttribute('class', 'title');
    projectTitle.textContent = `${project.name}`;
    projectTitle.setAttribute('contenteditable', 'true');

    let projectHeader = document.createElement('div');
    projectHeader.setAttribute('class', 'project-header');
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(newTodo);

    contentContainer.appendChild(projectDiv);
    projectDiv.appendChild(projectHeader);

    render.renderToDos(project, projectDiv);

});

export { projectRender };