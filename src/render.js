import { projects } from './project.js';

const render = (() => {
  const renderToDos = (todo, div) => {
    const todoscontainer = document.createElement('div');
    todoscontainer.setAttribute('class', 'todos-container');
    div.appendChild(todoscontainer);
    todo.todos.forEach((element) => {
      const todoContainer = document.createElement('div');
      todoContainer.setAttribute('class', 'todo');
      todoscontainer.appendChild(todoContainer);

      Object.entries(element).forEach((field) => {
        if (
          field[0] === 'name' ||
          field[0] === 'dueDate' ||
          field[0] === 'id'
        ) {
          const div = document.createElement('div');
          div.setAttribute('class', field[0]);
          div.textContent = field[1];
          todoContainer.appendChild(div);
        }
      });
    });
  };

  const renderProjects = () => {
    projects.projects.forEach((element) => {
      const div = document.createElement('div');
      //   div.setAttribute('class', 'project collapsible');
      //   div.textContent = `${element.name}`;
      //   projectsDiv.appendChild(div);
      renderToDos(element, div);
    });
  };

  return {
    renderProjects,
    renderToDos,
  };
})();

export { render };
