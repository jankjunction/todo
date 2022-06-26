import { project, projects, addProject } from "./project.js";


const init = (() => {
    if (localStorage.projects) {
        let storedProjects = JSON.parse(localStorage.projects);
        let projectsNav = document.getElementById('projects-nav');
        console.log(projectsNav);
        // let children = projectsNav.childNodes;

        // for (let i = 0; i < children.length - 1; i++) {
        //     projectsNav.removeChild(projectsNav.lastElementChild);
        // };

        for (let i = 0; i < storedProjects.projects.length; i++) {
            addProject(storedProjects.projects[i]);
        }
    } else {
        let defaultProject = new project('Default Project', []);
        addProject(defaultProject);
        console.log(projects);
    };
});

export { init };