import events from './events';

class todo {
    constructor(name, description, dueDate, priority, notes, status) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = status
    }
};

function addToDo(project, todo) {
    project.todos.push(todo);
}

export {addToDo, todo};