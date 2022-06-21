import events from './events.js';
import { project } from './project.js';

const projectForm = (() => {
    const content = document.getElementById('content');
    
    let projectFormDiv = document.createElement('div');
    projectFormDiv.setAttribute('id', 'project-form');
    projectFormDiv.classList.toggle('invisible');


    let titleLabel = document.createElement('label');
    titleLabel.textContent = 'Project Title';
    let title = document.createElement('input');
    title.setAttribute('id', 'new-project-title');
    let submit = document.createElement('input');
    submit.type='submit';
    submit.setAttribute('id', 'project-submit');

    projectFormDiv.appendChild(titleLabel);
    projectFormDiv.appendChild(title);
    projectFormDiv.appendChild(submit);
    content.appendChild(projectFormDiv);

    submit.addEventListener('click', () => {
        let newProject = new project;
        newProject.name = title.value;
        newProject.todos = [];
        projectFormDiv.classList.toggle('invisible');
        events.emit('New Project', newProject);
        
    })
});

export default projectForm;