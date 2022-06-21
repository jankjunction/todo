import clearDiv from "./clearDiv";
import domevents from "./domevents";
import events from "./events";
import { addProject } from "./project";
import { navprojects } from "./sidebar/projects";

const listener = (() => {
    events.on('New Project', addProject);
    events.on('Project Added', clearDiv);
    events.on('Project Added', navprojects);
    events.on('Project Added', domevents.projectClick);
    // events.on('New Project', domevents.newProject);
});

export { listener };