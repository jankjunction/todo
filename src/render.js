import { projects } from './project.js';

const render = (() => {

    const renderProjects = (() => {
            
        projects.projects.forEach(element => {
            let div = document.createElement('div');
            div.setAttribute('class', 'project collapsible');
            div.textContent = `${element.name}`;
            projectsDiv.appendChild(div);
            renderToDos(element, div);
        });
    });

    const renderToDos = ((todo, div) => {
        let todoscontainer = document.createElement('div');
        todoscontainer.setAttribute('class', 'todos-container');
        div.appendChild(todoscontainer);
        todo.todos.forEach(element => {

            let todoContainer = document.createElement('div');
            todoContainer.setAttribute('class', 'todo');
            todoscontainer.appendChild(todoContainer);

            Object.entries(element).forEach(field => {
                if ((field[0] === 'name') || (field[0] ==='dueDate') || (field[0] === 'id')) {
                    let div = document.createElement('div');
                    div.setAttribute('class', field[0]);
                    div.textContent = field[1];
                    todoContainer.appendChild(div);
                }
            });
        });
    });

    return {
        renderProjects: renderProjects,
        renderToDos: renderToDos
    }

})();

export { render }; 