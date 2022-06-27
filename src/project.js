import events from "./events";

let projects = (() => {
    let projects = [];

    return {
        projects: projects
    }
})();

class project {
    constructor (name, todos) {
        this.name = name;
       this.todos = todos;
    };
};

const addProject = ((project) => {
    projects.projects.push(project);

    let div = document.getElementById('projects-nav');
    events.emit('Project Added', div);
});

const getCurrentProject = (() => {
    let currentProjectName = document.getElementById('project-container').firstElementChild.firstElementChild.textContent;
    for (let i = 0; i < projects.projects.length; i++) {
        if (currentProjectName === projects.projects[i].name) {
            return projects.projects[i];
        } else {
        }
    }
});

export { project, projects, addProject, getCurrentProject };