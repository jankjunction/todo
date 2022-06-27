import clearDiv from "./clearDiv";
import events from "./events";
import { addProject } from "./project";
import { projectRender } from "./projectrender";
import { navprojects } from "./sidebar/projects";
import { updateStorage } from "./updateStorage";
import { toDoRender } from "./todorender";
import { getToDoContainer } from "./gettodocontainer";

const listener = (() => {
    events.on('Clear Div', clearDiv);
    events.on('Project Added', clearDiv);
    events.on('Project Added', navprojects);
    events.on('New Project', addProject);
    events.on('New Project', projectRender);
    events.on('New ToDo', projectRender);
    events.on('New Project', updateStorage);
    events.on('New ToDo', updateStorage);
    events.on('Render ToDo', toDoRender);
    events.on('Project Changed', getToDoContainer);
    events.on('ToDo Container Grabbed', clearDiv);
});

export { listener };