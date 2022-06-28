import './style.css';
import { todo, addToDo, toDoID } from './todo.js';
import { project, projects, addProject} from './project.js';
import buildHeader from './header.js';
import { projectRender } from './projectrender.js';
import {collapse} from './collapsible.js';
import buildSidebar from './sidebar/sidebar.js';
import { buildNav, newItemNav } from './sidebar/nav.js';
import { navprojects } from './sidebar/projects.js';
import projectForm from './projectform.js';
import todoForm from './todoform.js';
import domevents from './domevents.js';
import { listener } from './listener.js';
import { init } from './init.js';
import { getToDoContainer } from './gettodocontainer';

buildHeader();
buildSidebar();
buildNav();
newItemNav();
init();
projectRender(projects.projects[0]);
navprojects();
collapse();
projectForm();
todoForm();
domevents.newProject();
domevents.projectClick();
domevents.todayClick();
domevents.thisWeekClick();
domevents.newToDo();
domevents.toDoClick();
domevents.deleteToDoClick();
listener();



