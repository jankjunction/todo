import { projects } from './project.js';

const render = (() => {
    let contentContainer = document.getElementById('content');
    let projectsDiv = document.createElement('div');
    projectsDiv.setAttribute('id', 'projects-container');
    contentContainer.appendChild(projectsDiv);

    const renderProjects = (() => {
            
        projects.projects.forEach(element => {
            let div = document.createElement('div');
            div.setAttribute('class', 'project collapsible');
            div.textContent = `${element.name}`;
            projectsDiv.appendChild(div);
            renderToDos(element, div);
        });

        return {
            renderProjects: renderProjects
        }
    });

    const renderToDos = ((todo, div) => {
        let todoscontainer = document.createElement('div');
        todoscontainer.setAttribute('class', 'todos-container invisible');
        div.appendChild(todoscontainer);
        todo.todos.forEach(element => {

            let todoContainer = document.createElement('div');
            todoContainer.setAttribute('class', 'todo');
            todoscontainer.appendChild(todoContainer);

            Object.entries(element).forEach(field => {
                let div = document.createElement('div');
                div.setAttribute('class', field[0]);
                div.textContent = field[1];
                todoContainer.appendChild(div);
            });
        });

    });

    renderProjects();

    return {
        renderProjects: renderProjects,
    }

});

export { render }; 