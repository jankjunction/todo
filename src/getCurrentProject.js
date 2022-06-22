import { projects } from "./project";

const getCurrentProject = (() => {
    let currentProjectName = document.getElementById('project-container').firstElementChild.firstElementChild.textContent;
    for (let i = 0; i < projects.projects.length; i++) {
        if (currentProjectName === projects.projects[i].name) {
            return projects.projects[i];
        } else {
        }
    }
});

export {getCurrentProject};