import { render } from './render.js';

const toDoRender = ((toDo) => {
    let contentContainer = document.getElementById('content');

    let toDoDiv = document.createElement('div');
    toDoDiv.setAttribute('id', 'todo-container');

    let toDoId = document.createElement('div');
    toDoId.setAttribute('id', 'todo-id');
    toDoId.setAttribute('class', 'id');
    toDoId.textContent = `${toDo.id}`;

    let toDoTitle = document.createElement('div');
    toDoTitle.setAttribute('id', 'todo-title');
    toDoTitle.setAttribute('class', 'title');
    toDoTitle.textContent = `${toDo.name}`;
    toDoTitle.setAttribute('contenteditable', 'true');

    let dueDate = document.createElement('div')
    dueDate.setAttribute('class', 'container');
    let dueDateLabel = document.createElement('div')
    dueDateLabel.textContent = 'Due Date:'
    let toDoDueDate = document.createElement('input');
    toDoDueDate.setAttribute('id', 'todo-duedate');
    toDoDueDate.type='date';
    toDoDueDate.value = `${toDo.dueDate}`;
    dueDate.appendChild(dueDateLabel);
    dueDate.appendChild(toDoDueDate);
    
    let description = document.createElement('div');
    description.setAttribute('class', 'container');
    let descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    let toDoDescription = document.createElement('div')
    toDoDescription.setAttribute('id', 'todo-description');
    toDoDescription.setAttribute('contenteditable', 'true');
    toDoDescription.textContent = `${toDo.description}`;
    description.appendChild(descriptionLabel);
    description.appendChild(toDoDescription);

    let toDoPriority = document.createElement('div');
    toDoPriority.setAttribute('id', 'todo-priority');

    let priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    let priority = document.createElement('select');
    priority.setAttribute('id', 'todo-priority-select');
    let priorities = ['low', 'med', 'high'];

    for (let i = 0; i < priorities.length; i++) {
        let option = document.createElement('option');
        option.textContent = priorities[i];
        priority.appendChild(option);
    }

    priority.value = toDo.priority;

    toDoPriority.appendChild(priorityLabel);
    toDoPriority.appendChild(priority);

    let notes = document.createElement('div');
    notes.setAttribute('class', 'container');
    let notesLabel = document.createElement('label');
    notesLabel.textContent = 'Notes:';
    let toDoNotes = document.createElement('div');
    toDoNotes.setAttribute('id', 'todo-notes')
    toDoNotes.setAttribute('contenteditable', 'true')
    toDoNotes.textContent = `${toDo.notes}`;
    notes.appendChild(notesLabel);
    notes.appendChild(toDoNotes);

    let deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('id', 'delete-todo');
    deleteBtn.textContent = 'Delete ToDo'


    toDoDiv.appendChild(toDoId);
    toDoDiv.appendChild(toDoTitle);
    toDoDiv.appendChild(dueDate);
    toDoDiv.appendChild(description);
    toDoDiv.appendChild(toDoPriority);
    toDoDiv.appendChild(notes);
    toDoDiv.appendChild(deleteBtn);


    contentContainer.appendChild(toDoDiv);

});

export { toDoRender };