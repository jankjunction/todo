import { projects } from "./project";

const updateStorage = (() => {
    localStorage.projects = JSON.stringify(projects);
});

export { updateStorage };