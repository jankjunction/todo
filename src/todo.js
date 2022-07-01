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
    let projectContainer = document.getElementById('project-container');
    clearDiv(projectContainer);
        for (let i = 0; i < project.todos.length; i++) {
            if (project.todos[i] === todo) {
                project.todos.splice(i, 1)
                projectRender(project);
                events.emit('Project Changed', '');
            };
        };

        events.emit('ToDo Deleted', '');
});

function toDoID() {
    let id = window.crypto.randomUUID();
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

const editToDoAttribute = ((data) => {
    let projectId = data[0]
    let toDoId = data[1];
    let attr = data[2];
    let newAttrValue = data[3];
    for (let i = 0; i < projects.projects.length; i++) {
        if (projects.projects[i].id === projectId) {
            for (let j = 0; j <projects.projects[i].todos.length; j++) {
                if (projects.projects[i].todos[j].id === toDoId) {
                    projects.projects[i].todos[j][`${attr}`] = newAttrValue;
                };
            };
        };
    };
});

export {addToDo, todo, toDoID, getToDoById, deleteToDo, editToDoAttribute};