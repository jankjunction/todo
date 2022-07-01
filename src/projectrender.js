import { render } from './render';

const projectRender = (project) => {
  const contentContainer = document.getElementById('content');

  const projectId = document.createElement('div');
  projectId.textContent = `${project.id}`;
  projectId.setAttribute('class', 'id');

  const projectDelete = document.createElement('button');
  projectDelete.setAttribute('id', 'project-delete');
  projectDelete.textContent = 'Delete Project';

  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('id', 'project-container');

  const newTodo = document.createElement('span');
  newTodo.setAttribute('id', 'new-todo');
  newTodo.textContent = '+ new todo';

  const projectTitle = document.createElement('div');
  projectTitle.setAttribute('class', 'title');
  projectTitle.setAttribute('id', `${project.id}`);
  projectTitle.textContent = `${project.name}`;
  projectTitle.setAttribute('contenteditable', 'true');

  const projectHeader = document.createElement('div');
  projectHeader.setAttribute('class', 'project-header');
  projectHeader.appendChild(projectTitle);
  projectHeader.appendChild(newTodo);

  contentContainer.appendChild(projectDiv);
  projectDiv.appendChild(projectId);
  projectDiv.appendChild(projectHeader);

  render.renderToDos(project, projectDiv);

  projectDiv.appendChild(projectDelete);
};

export { projectRender };
