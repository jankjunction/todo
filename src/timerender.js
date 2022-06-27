import { render } from './render.js';
import { project, projects } from './project.js';
import { getDate, isToday, parseISO } from 'date-fns';
import isThisWeek from 'date-fns/esm/isThisWeek';

const todayRender = (() => {
    let contentContainer = document.getElementById('content');

    let todayDiv = document.createElement('div');
    todayDiv.setAttribute('id', 'project-container');

    let todayTitle = document.createElement('div');
    todayTitle.setAttribute('class', 'title');
    todayTitle.textContent = 'Today';

    let todayHeader = document.createElement('div');
    todayHeader.setAttribute('class', 'today-header');
    todayHeader.appendChild(todayTitle);

    contentContainer.appendChild(todayDiv);
    todayDiv.appendChild(todayHeader);

    let todos = todayToDos();
    let todayProject = new project('todayProject', [...todos])

    render.renderToDos(todayProject, todayDiv);

});

const thisWeekRender = (() => {
    let contentContainer = document.getElementById('content');

    let thisWeekDiv = document.createElement('div');
    thisWeekDiv.setAttribute('id', 'project-container');

    let thisWeekTitle = document.createElement('div');
    thisWeekTitle.setAttribute('class', 'title');
    thisWeekTitle.textContent = 'This Week';

    let thisWeekHeader = document.createElement('div');
    thisWeekHeader.setAttribute('class', 'this-week-header');
    thisWeekHeader.appendChild(thisWeekTitle);

    contentContainer.appendChild(thisWeekDiv);
    thisWeekDiv.appendChild(thisWeekHeader);

    let todos = thisWeekToDos();
    let thisWeekProject = new project('thisWeekProject', [...todos])

    render.renderToDos(thisWeekProject, thisWeekDiv);

});

const todayToDos = (() => {

    let toDos = [];

    for (let i = 0; i < projects.projects.length; i++) {
        let project = projects.projects[i];
        for (let j = 0; j < project.todos.length; j++) {
            if (isToday(parseISO(project.todos[j].dueDate))) {
            toDos.push(project.todos[j]);
            }
        }
    }
    return toDos;
});

const thisWeekToDos = (() => {

    let toDos = [];

    for (let i = 0; i < projects.projects.length; i++) {
        let project = projects.projects[i];
        for (let j = 0; j < project.todos.length; j++) {
            if (isThisWeek(parseISO(project.todos[j].dueDate))) {
            toDos.push(project.todos[j]);
            }
        }
    }
    return toDos;
});

export { todayRender, todayToDos, thisWeekRender, thisWeekToDos };