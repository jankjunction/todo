import { project, projects, addProject, projectID } from "./project.js";


const init = (() => {
    if (localStorage.projects) {
        let storedProjects = JSON.parse(localStorage.projects);
        for (let i = 0; i < storedProjects.projects.length; i++) {
            addProject(storedProjects.projects[i]);
        }
    } else {
        let defaultProject = new project('Default Project', [], projectID());
        addProject(defaultProject);
        
    };
});

export { init };