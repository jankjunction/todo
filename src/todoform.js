import events from './events.js';
import { getCurrentProject } from './project.js';
import { addToDo, todo } from './todo.js';

const todoForm = (() => {
    const content = document.getElementById('content');
    
    let toDoFormDiv = document.createElement('div');
    toDoFormDiv.setAttribute('id', 'todo-form');
    toDoFormDiv.classList.toggle('invisible');

    let nameLabel = document.createElement('label');
    nameLabel.textContent = 'todo name';
    let name = document.createElement('input');
    name.setAttribute('id', 'new-todo-name');
    name.setAttribute('required', '');

    let dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    let dueDate = document.createElement('input');
    dueDate.type='date';
    dueDate.setAttribute('id', 'new-todo-title');

    let descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    let description = document.createElement('input');
    description.setAttribute('id', 'new-todo-description');

    let notesLabel = document.createElement('label');
    notesLabel.textContent = 'Notes';
    let notes = document.createElement('input');
    notes.setAttribute('id', 'new-todo-notes');

    let priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    let priority = document.createElement('select');
    priority.setAttribute('id', 'new-todo-priority');

    let priorities = ['low', 'med', 'high'];

    for (let i = 0; i < priorities.length; i++) {
        let option = document.createElement('option');
        option.textContent = priorities[i];
        priority.appendChild(option);
    }

    let submit = document.createElement('input');
    submit.type='submit';
    submit.setAttribute('id', 'todo-submit');

    toDoFormDiv.appendChild(nameLabel);
    toDoFormDiv.appendChild(name);
    toDoFormDiv.appendChild(dueDateLabel);
    toDoFormDiv.appendChild(dueDate);
    toDoFormDiv.appendChild(descriptionLabel);
    toDoFormDiv.appendChild(description);
    toDoFormDiv.appendChild(notesLabel);
    toDoFormDiv.appendChild(notes);
    toDoFormDiv.appendChild(priorityLabel);
    toDoFormDiv.appendChild(priority);
    toDoFormDiv.appendChild(submit);
    content.appendChild(toDoFormDiv);

    submit.addEventListener('click', () => {
        let newToDo = new todo;
        newToDo.name = name.value;
        newToDo.dueDate = dueDate.value;
        newToDo.description = description.value;
        newToDo.notes = notes.value;
        newToDo.priority = priority.value;
        toDoFormDiv.classList.toggle('invisible');
        let currentProject = getCurrentProject();
        addToDo(getCurrentProject(), newToDo);
        let projectContainer = document.getElementById('project-container');
        events.emit('Clear Div', projectContainer);
        events.emit('New ToDo', currentProject);

        name.value = '';
        dueDate.value = '';
        description.value = '';
        notes.value = '';
        priority.value = '';
    })
});

export default todoForm;