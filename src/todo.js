import events from './events';

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

function toDoID() {
    let id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    return id;
};

export {addToDo, todo, toDoID};