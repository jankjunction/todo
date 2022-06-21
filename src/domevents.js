import { project } from "./project";
import { projects } from "./project";
import clearDiv from "./clearDiv";
import { projectRender } from "./projectrender";

const domevents = (() => {
    const newProject = (() => {
        let newProjectBtn = document.getElementById('new-project');

        newProjectBtn.addEventListener('click', () => {
            let projectForm = document.getElementById('project-form');
            projectForm.classList.toggle('invisible');
        })
    });
    const newToDo = (() => {
        let newToDoBtn = document.getElementById('new-todo');

        newToDoBtn.addEventListener('click', () => {
            let todoForm = document.getElementById('todo-form');
            todoForm.classList.toggle('invisible');
        })
    });

    const projectClick = (() => {
        let projectBtn = document.querySelectorAll('.nav-project')
        
        for (let i = 0; i < projectBtn.length; i++) {
            projectBtn[i].addEventListener('click', () => {
                let projectContainer = document.getElementById('project-container');
                clearDiv(projectContainer);
                projectRender(projects.projects[i]);
            });
        }
});

    return {
        newProject: newProject,
        newToDo: newToDo,
        projectClick: projectClick,
    }
})();

export default domevents;