import events from './events';
import { getCurrentProject, projects } from './project';
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
};

function addToDo(project, todo) {
    project.todos.push(todo);
};

const deleteToDo = ((project, todo) => {
    console.log(project);
    console.log(todo);
    let projectContainer = document.getElementById('project-container');
    clearDiv(projectContainer);
        for (let i = 0; i < project.todos.length; i++) {
            if (project.todos[i] === todo) {
                project.todos.splice(i, 1)
                console.log((projects.projects[i]));
                projectRender(project);
                events.emit('Project Changed', '');
            };
        };

        events.emit('ToDo Deleted', '');
});

function toDoID() {
    let id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    return id;
};

const getToDoById = ((id) => {
    let projs = projects.projects;
    for (let i = 0; i < projs.length; i++) {

        let todos = projects.projects[i].todos;

        for (let j = 0; j < todos.length; j++) {
                if (id === projs[i].todos[j].id) {
                    return projs[i].todos[j];
                } else {
            }
        }
    }
});

export {addToDo, todo, toDoID, getToDoById, deleteToDo};