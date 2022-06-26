import clearDiv from "./clearDiv";
import events from "./events";
import { addProject } from "./project";
import { projectRender } from "./projectrender";
import { navprojects } from "./sidebar/projects";
import { addToDo } from "./todo";
import todoForm from "./todoform";
import { updateStorage } from "./updateStorage";

const listener = (() => {
    events.on('Clear Div', clearDiv);
    events.on('Project Added', clearDiv);
    events.on('Project Added', navprojects);
    events.on('New Project', addProject);
    events.on('New Project', projectRender);
    events.on('New ToDo', projectRender);
    events.on('New Project', updateStorage);
    events.on('New ToDo', updateStorage);
});

export { listener };