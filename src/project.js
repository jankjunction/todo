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
});

export { project, projects, addProject };