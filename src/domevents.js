import { getCurrentProject, projects } from "./project";
import clearDiv from "./clearDiv";
import { projectRender } from "./projectrender";
import { todayRender, thisWeekRender } from "./timerender";
import { getToDoById, deleteToDo } from './todo';
import events from './events';

const domevents = (() => {
    const newProject = (() => {
        let newProjectBtn = document.getElementById('new-project');

        newProjectBtn.addEventListener('click', () => {
            let projectForm = document.getElementById('project-form');
            projectForm.classList.toggle('invisible');
        })
    });

    const newToDo = (() => {
        let content = document.getElementById('content');

        content.addEventListener('click', (e) => {
            if (e.target.id === 'new-todo') {
                if (e.target.childNodes[0].data === '+ new todo') {
                let todoForm = document.getElementById('todo-form');
                todoForm.classList.toggle('invisible');
                }
            }
        })
    });

    const projectClick = (() => {
        let sidebar = document.getElementById('sidebar');

        sidebar.addEventListener('click', (e) => {
            if (e.target.attributes[0].nodeValue === 'nav-project') {
                let projectContainer = document.getElementById('project-container');
                clearDiv(projectContainer);
                for (let i = 0; i < projects.projects.length; i++) {
                    if (e.target.childNodes[0].data === projects.projects[i].name) {
                        projectRender(projects.projects[i]);
                        events.emit('Project Changed', '');
                    }
                }
            }
        });      
    });

    const todayClick = (() => {
        let sidebar = document.getElementById('sidebar');

        sidebar.addEventListener('click', (e) => {
            if (e.target.attributes[0].nodeValue === 'today') {
                let projectContainer = document.getElementById('project-container');
                clearDiv(projectContainer);
                events.emit('Project Changed', '');
                todayRender();
                }
            });  
    });

    const thisWeekClick = (() => {
        let sidebar = document.getElementById('sidebar');

        sidebar.addEventListener('click', (e) => {
            if (e.target.attributes[0].nodeValue === 'this-week') {
                let projectContainer = document.getElementById('project-container');
                clearDiv(projectContainer);
                events.emit('Project Changed', '');
                thisWeekRender();
                }
            });
    });

    const toDoClick = (() => {
        let content = document.getElementById('content');
        content.addEventListener('click', (e) => {
            if ((e.target.parentElement.attributes[0].nodeValue === 'todo')) {
                let currentToDo = getToDoById(e.target.parentElement.childNodes[2].textContent);
                events.emit('Render ToDo', currentToDo);
            };
        });  
    });

    const deleteToDoClick = (() => {
        let content = document.getElementById('content');
        content.addEventListener('click', (e) => {
            if (e.target.textContent === 'Delete ToDo') {
                let currentToDo = getToDoById(e.target.parentElement.childNodes[0].textContent);
                console.log(getCurrentProject());
                deleteToDo(getCurrentProject(), currentToDo);
            };
        });
    });

    return {
        newProject: newProject,
        newToDo: newToDo,
        projectClick: projectClick,
        todayClick: todayClick,
        thisWeekClick: thisWeekClick,
        toDoClick: toDoClick,
        deleteToDoClick: deleteToDoClick
    }
})();

export default domevents;