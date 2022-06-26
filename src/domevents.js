import { project } from "./project";
import { projects } from "./project";
import clearDiv from "./clearDiv";
import { projectRender } from "./projectrender";
import { todayRender, thisWeekRender } from "./timerender";
import events from "./events";

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
                if (e.target.childNodes[0].data === '+') {
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
                thisWeekRender();
                }

            });
    });

    return {
        newProject: newProject,
        newToDo: newToDo,
        projectClick: projectClick,
        todayClick: todayClick,
        thisWeekClick: thisWeekClick
    }
})();

export default domevents;