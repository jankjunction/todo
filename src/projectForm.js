import events from './events.js';
import { project } from './project.js';

const projectForm = () => {
  const content = document.getElementById('content');

  const projectFormDiv = document.createElement('div');
  projectFormDiv.setAttribute('id', 'project-form');
  projectFormDiv.classList.toggle('invisible');

  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Project Title';
  const title = document.createElement('input');
  title.setAttribute('id', 'new-project-title');
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.setAttribute('id', 'project-submit');

  projectFormDiv.appendChild(titleLabel);
  projectFormDiv.appendChild(title);
  projectFormDiv.appendChild(submit);
  content.appendChild(projectFormDiv);

  content.addEventListener('click', (e) => {
    if (e.target.id === 'project-submit') {
      const newProject = new project();
      newProject.name = title.value;
      newProject.todos = [];
      projectFormDiv.classList.toggle('invisible');
      events.emit('New Project', newProject);
      const projectContainer = document.getElementById('project-container');
      events.emit('Clear Div', projectContainer);
      title.value = '';
    }
  });
};

export default projectForm;
