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
    console.log('Project Added');

    let div = document.getElementById('projects-nav');
    events.emit('Project Added', div);
});

export { project, projects, addProject };