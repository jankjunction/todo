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
       this.id = projectID();
    };
};

function projectID() {
    let id = 'proj' + Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    return id;
};

const addProject = ((project) => {
    projects.projects.push(project);

    let projectsNav = document.getElementById('projects-nav');
    events.emit('Project Added', projectsNav);
});

const deleteProject = ((project) => {
    for (let i = 0; i < projects.projects.length; i++) {
        if (projects.projects[i] === project) {
            projects.projects.splice(i, 1);
            let projectsNav = document.getElementById('projects-nav');
            events.emit('Project Deleted', projectsNav);
            let resultingProjects = projects.projects;
            events.emit('Render After Project Delete', resultingProjects[0]);
            console.log(resultingProjects);
        };
    };
});

const getCurrentProject = (() => {
    let currentProjectName = document.getElementById('project-container').firstElementChild.textContent;
    console.log(currentProjectName);
    for (let i = 0; i < projects.projects.length; i++) {
        if (currentProjectName === projects.projects[i].id) {
            return projects.projects[i];
        } else {
        };
    };
});

const editProjectAttribute = ((data) => {
    let id = data[0];
    let attr = data[1];
    let newAttrValue = data[2];
    for (let i = 0; i < projects.projects.length; i++) {
        if (projects.projects[i].id === id) {
            projects.projects[i][`${attr}`] = newAttrValue;
        };
    };
});

export { project, projects, addProject, getCurrentProject, projectID, editProjectAttribute, deleteProject };