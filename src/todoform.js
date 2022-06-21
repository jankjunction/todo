import events from './events.js';

const todoForm = (() => {
    const content = document.getElementById('content');
    
    let toDoFormDiv = document.createElement('div');
    toDoFormDiv.setAttribute('id', 'todo-form');
    toDoFormDiv.classList.toggle('invisible');


    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'todo name';
    let name = document.createElement('input');
    name.setAttribute('id', 'new-todo-name');


    let dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    let dueDate = document.createElement('input');
    dueDate.type='date';
    dueDate.setAttribute('id', 'new-todo-title');


    let descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    let description = document.createElement('input');
    description.setAttribute('id', 'new-todo-description');

    toDoFormDiv.appendChild(nameLabel);
    toDoFormDiv.appendChild(name);
    toDoFormDiv.appendChild(dueDateLabel);
    toDoFormDiv.appendChild(dueDate);
    toDoFormDiv.appendChild(descriptionLabel);
    toDoFormDiv.appendChild(description);
    content.appendChild(toDoFormDiv);
});

export default todoForm;