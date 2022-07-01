import { isToday, parseISO } from 'date-fns';
import isThisWeek from 'date-fns/esm/isThisWeek';
import { render } from './render';
import { project, projects } from './project';

const todayRender = () => {
  const contentContainer = document.getElementById('content');

  const todayDiv = document.createElement('div');
  todayDiv.setAttribute('id', 'project-container');

  const todayTitle = document.createElement('div');
  todayTitle.setAttribute('class', 'title');
  todayTitle.textContent = 'Today';

  const todayHeader = document.createElement('div');
  todayHeader.setAttribute('class', 'today-header');
  todayHeader.appendChild(todayTitle);

  contentContainer.appendChild(todayDiv);
  todayDiv.appendChild(todayHeader);

  const todos = todayToDos();
  const todayProject = new project('todayProject', [...todos]);

  render.renderToDos(todayProject, todayDiv);
};

const thisWeekRender = () => {
  const contentContainer = document.getElementById('content');

  const thisWeekDiv = document.createElement('div');
  thisWeekDiv.setAttribute('id', 'project-container');

  const thisWeekTitle = document.createElement('div');
  thisWeekTitle.setAttribute('class', 'title');
  thisWeekTitle.textContent = 'This Week';

  const thisWeekHeader = document.createElement('div');
  thisWeekHeader.setAttribute('class', 'this-week-header');
  thisWeekHeader.appendChild(thisWeekTitle);

  contentContainer.appendChild(thisWeekDiv);
  thisWeekDiv.appendChild(thisWeekHeader);

  const todos = thisWeekToDos();
  const thisWeekProject = new project('thisWeekProject', [...todos]);

  render.renderToDos(thisWeekProject, thisWeekDiv);
};

const todayToDos = () => {
  const toDos = [];

  for (let i = 0; i < projects.projects.length; i += 1) {
    const project = projects.projects[i];
    for (let j = 0; j < project.todos.length; j += 1) {
      if (isToday(parseISO(project.todos[j].dueDate))) {
        toDos.push(project.todos[j]);
      }
    }
  }
  return toDos;
};

const thisWeekToDos = () => {
  const toDos = [];

  for (let i = 0; i < projects.projects.length; i += 1) {
    const project = projects.projects[i];
    for (let j = 0; j < project.todos.length; j += 1) {
      if (isThisWeek(parseISO(project.todos[j].dueDate))) {
        toDos.push(project.todos[j]);
      }
    }
  }
  return toDos;
};

export { todayRender, todayToDos, thisWeekRender, thisWeekToDos };
