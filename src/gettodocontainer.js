import events from './events';

const getToDoContainer = () => {
  const todoContainer = document.getElementById('todo-container');
  if (todoContainer !== null) {
    events.emit('ToDo Container Grabbed', todoContainer);
  }
};

export { getToDoContainer };
