const toDoRender = (toDo) => {
  const contentContainer = document.getElementById('content');

  const toDoDiv = document.createElement('div');
  toDoDiv.setAttribute('id', 'todo-container');

  const toDoId = document.createElement('div');
  toDoId.setAttribute('id', 'todo-id');
  toDoId.setAttribute('class', 'id');
  toDoId.textContent = `${toDo.id}`;

  const toDoTitle = document.createElement('div');
  toDoTitle.setAttribute('id', 'todo-title');
  toDoTitle.setAttribute('class', 'title');
  toDoTitle.textContent = `${toDo.name}`;
  toDoTitle.setAttribute('contenteditable', 'true');

  const dueDate = document.createElement('div');
  dueDate.setAttribute('class', 'container');
  const dueDateLabel = document.createElement('div');
  dueDateLabel.textContent = 'Due Date:';
  const toDoDueDate = document.createElement('input');
  toDoDueDate.setAttribute('id', 'todo-duedate');
  toDoDueDate.type = 'date';
  toDoDueDate.value = `${toDo.dueDate}`;
  dueDate.appendChild(dueDateLabel);
  dueDate.appendChild(toDoDueDate);

  const description = document.createElement('div');
  description.setAttribute('class', 'container');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';
  const toDoDescription = document.createElement('div');
  toDoDescription.setAttribute('id', 'todo-description');
  toDoDescription.setAttribute('contenteditable', 'true');
  toDoDescription.textContent = `${toDo.description}`;
  description.appendChild(descriptionLabel);
  description.appendChild(toDoDescription);

  const toDoPriority = document.createElement('div');
  toDoPriority.setAttribute('id', 'todo-priority');

  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority:';
  const priority = document.createElement('select');
  priority.setAttribute('id', 'todo-priority-select');
  const priorities = ['low', 'med', 'high'];

  for (let i = 0; i < priorities.length; i += 1) {
    const option = document.createElement('option');
    option.textContent = priorities[i];
    priority.appendChild(option);
  }

  priority.value = toDo.priority;

  toDoPriority.appendChild(priorityLabel);
  toDoPriority.appendChild(priority);

  const notes = document.createElement('div');
  notes.setAttribute('class', 'container');
  const notesLabel = document.createElement('label');
  notesLabel.textContent = 'Notes:';
  const toDoNotes = document.createElement('div');
  toDoNotes.setAttribute('id', 'todo-notes');
  toDoNotes.setAttribute('contenteditable', 'true');
  toDoNotes.textContent = `${toDo.notes}`;
  notes.appendChild(notesLabel);
  notes.appendChild(toDoNotes);

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', 'delete-todo');
  deleteBtn.textContent = 'Delete ToDo';

  toDoDiv.appendChild(toDoId);
  toDoDiv.appendChild(toDoTitle);
  toDoDiv.appendChild(dueDate);
  toDoDiv.appendChild(description);
  toDoDiv.appendChild(toDoPriority);
  toDoDiv.appendChild(notes);
  toDoDiv.appendChild(deleteBtn);

  contentContainer.appendChild(toDoDiv);

  // Hides delete button if you are currently in the Today or This Week views
  const currentProject = document.getElementById('project-container');
  const title = currentProject.childNodes[0].childNodes[0].textContent;
  if (title === 'Today' || title === 'This Week') {
    const todoDeleteBtn = document.getElementById('delete-todo');
    todoDeleteBtn.classList.toggle('invisible');
  }
};

export { toDoRender };
