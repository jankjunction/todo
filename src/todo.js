import events from './events';
import { projects } from './project';
import { projectRender } from './projectrender';
import clearDiv from './clearDiv';

class todo {
  constructor(name, description, dueDate, priority, notes, id) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.id = toDoID();
  }
}

const addToDo = (project, todo) => {
  project.todos.push(todo);
};

const deleteToDo = (project, todo) => {
  const projectContainer = document.getElementById('project-container');
  clearDiv(projectContainer);
  for (let i = 0; i < project.todos.length; i += 1) {
    if (project.todos[i] === todo) {
      project.todos.splice(i, 1);
      projectRender(project);
      events.emit('Project Changed', '');
    }
  }

  events.emit('ToDo Deleted', '');
};

function toDoID() {
  const id = window.crypto.randomUUID();
  return id;
}

const getToDoById = (id) => {
  const projs = projects.projects;
  for (let i = 0; i < projs.length; i += 1) {
    const { todos } = projects.projects[i];

    for (let j = 0; j < todos.length; j += 1) {
      if (id === projs[i].todos[j].id) {
        return projs[i].todos[j];
      }
    }
  }
};

const editToDoAttribute = (data) => {
  const projectId = data[0];
  const toDoId = data[1];
  const attr = data[2];
  const newAttrValue = data[3];
  for (let i = 0; i < projects.projects.length; i += 1) {
    if (projects.projects[i].id === projectId) {
      for (let j = 0; j < projects.projects[i].todos.length; j += 1) {
        if (projects.projects[i].todos[j].id === toDoId) {
          projects.projects[i].todos[j][`${attr}`] = newAttrValue;
        }
      }
    }
  }
};

export { addToDo, todo, toDoID, getToDoById, deleteToDo, editToDoAttribute };
