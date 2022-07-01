import { getCurrentProject, projects, deleteProject } from './project';
import clearDiv from './clearDiv';
import { projectRender } from './projectrender';
import { todayRender, thisWeekRender } from './timerender';
import { getToDoById, deleteToDo } from './todo';
import events from './events';
import { getToDoContainer } from './gettodocontainer';

const domevents = (() => {
  const newProject = () => {
    const content = document.getElementById('content');

    content.addEventListener('click', (e) => {
      if (e.target.id === 'new-project') {
        const projectForm = document.getElementById('project-form');
        projectForm.classList.toggle('invisible');
      }
    });
  };

  const newToDo = () => {
    const content = document.getElementById('content');

    content.addEventListener('click', (e) => {
      if (e.target.id === 'new-todo') {
        if (e.target.childNodes[0].data === '+ new todo') {
          const todoForm = document.getElementById('todo-form');
          todoForm.classList.toggle('invisible');
        }
      }
    });
  };

  const projectClick = () => {
    const sidebar = document.getElementById('sidebar');

    sidebar.addEventListener('click', (e) => {
      if (e.target.attributes[0].nodeValue === 'nav-project') {
        const projectContainer = document.getElementById('project-container');
        clearDiv(projectContainer);
        for (let i = 0; i < projects.projects.length; i += 1) {
          if (e.target.lastChild.innerText === projects.projects[i].id) {
            projectRender(projects.projects[i]);
            events.emit('Project Changed', '');
          }
        }
      }
    });
  };

  const todayClick = () => {
    const sidebar = document.getElementById('sidebar');

    sidebar.addEventListener('click', (e) => {
      if (e.target.attributes[0].nodeValue === 'today') {
        const projectContainer = document.getElementById('project-container');
        clearDiv(projectContainer);
        events.emit('Project Changed', '');
        todayRender();
      }
    });
  };

  const thisWeekClick = () => {
    const sidebar = document.getElementById('sidebar');

    sidebar.addEventListener('click', (e) => {
      if (e.target.attributes[0].nodeValue === 'this-week') {
        const projectContainer = document.getElementById('project-container');
        clearDiv(projectContainer);
        events.emit('Project Changed', '');
        thisWeekRender();
      }
    });
  };

  const toDoClick = () => {
    const content = document.getElementById('content');
    content.addEventListener('click', (e) => {
      if (
        e.target.parentElement.attributes[0] ||
        e.target.classList[0] === 'todo'
      ) {
        if (e.target.parentElement.attributes[0].nodeValue === 'todo') {
          const currentToDo = getToDoById(
            e.target.parentElement.childNodes[2].textContent
          );
          getToDoContainer();
          events.emit('Render ToDo', currentToDo);
        }
      }
    });
  };

  const deleteToDoClick = () => {
    const content = document.getElementById('content');
    content.addEventListener('click', (e) => {
      if (e.target.textContent === 'Delete ToDo') {
        const currentToDo = getToDoById(
          e.target.parentElement.childNodes[0].textContent
        );
        deleteToDo(getCurrentProject(), currentToDo);
      }
    });
  };

  const deleteProjectClick = () => {
    const content = document.getElementById('content');
    content.addEventListener('click', (e) => {
      if (e.target.id === 'project-delete') {
        getToDoContainer();
        deleteProject(getCurrentProject());
      }
    });
  };

  const editProjectTitle = () => {
    const content = document.getElementById('content');
    content.addEventListener('focusout', (e) => {
      if (e.target.parentElement.classList[0] === 'project-header') {
        events.emit('Project Edited', [
          e.target.id,
          'name',
          e.target.textContent,
        ]);
        const projectsNav = document.getElementById('projects-nav');
        events.emit('Clear Div', projectsNav);
        events.emit('Render Sidebar', '');
      }
    });
  };

  const editToDoTitle = () => {
    const content = document.getElementById('content');
    content.addEventListener('focusout', (e) => {
      if (e.target.id === 'todo-title') {
        const currentProject = getCurrentProject();
        events.emit('ToDo Edited', [
          currentProject.id,
          e.target.parentElement.firstElementChild.textContent,
          'name',
          e.target.textContent,
        ]);
        const projectContainer = document.getElementById('project-container');
        events.emit('Clear Div', projectContainer);
        events.emit('Render Project', currentProject);
      }
    });
  };

  const editToDoDueDate = () => {
    const content = document.getElementById('content');
    content.addEventListener('focusout', (e) => {
      if (e.target.id === 'todo-duedate' || e.target.id === 'todo-priority') {
        const currentProject = getCurrentProject();
        events.emit('ToDo Edited', [
          currentProject.id,
          e.target.parentElement.parentElement.firstElementChild.textContent,
          'dueDate',
          e.target.value,
        ]);
        const projectContainer = document.getElementById('project-container');
        events.emit('Clear Div', projectContainer);
        events.emit('Render Project', currentProject);
      }
    });
  };

  const editToDoPriority = () => {
    const content = document.getElementById('content');
    content.addEventListener('focusout', (e) => {
      if (e.target.id === 'todo-priority-select') {
        const currentProject = getCurrentProject();
        events.emit('ToDo Edited', [
          currentProject.id,
          e.target.parentElement.parentElement.firstElementChild.textContent,
          'priority',
          e.target.value,
        ]);
        const projectContainer = document.getElementById('project-container');
        events.emit('Clear Div', projectContainer);
        events.emit('Render Project', currentProject);
      }
    });
  };

  const editToDoDescription = () => {
    const content = document.getElementById('content');
    content.addEventListener('focusout', (e) => {
      if (e.target.id === 'todo-description') {
        const currentProject = getCurrentProject();
        events.emit('ToDo Edited', [
          currentProject.id,
          e.target.parentElement.parentElement.firstElementChild.textContent,
          'description',
          e.target.textContent,
        ]);
        const projectContainer = document.getElementById('project-container');
        events.emit('Clear Div', projectContainer);
        events.emit('Render Project', currentProject);
      }
    });
  };

  const editToDoNotes = () => {
    const content = document.getElementById('content');
    content.addEventListener('focusout', (e) => {
      if (e.target.id === 'todo-notes') {
        const currentProject = getCurrentProject();
        events.emit('ToDo Edited', [
          currentProject.id,
          e.target.parentElement.parentElement.firstElementChild.textContent,
          'notes',
          e.target.textContent,
        ]);
        const projectContainer = document.getElementById('project-container');
        events.emit('Clear Div', projectContainer);
        events.emit('Render Project', currentProject);
      }
    });
  };

  return {
    newProject,
    newToDo,
    projectClick,
    todayClick,
    thisWeekClick,
    toDoClick,
    deleteToDoClick,
    editProjectTitle,
    deleteProjectClick,
    editToDoTitle,
    editToDoDueDate,
    editToDoPriority,
    editToDoDescription,
    editToDoNotes,
  };
})();

export default domevents;
