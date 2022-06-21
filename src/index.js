import './style.css';
import { todo, addToDo } from './todo.js';
import { project, projects, addProject} from './project.js';
import buildHeader from './header.js';
import { projectRender } from './projectrender.js';
import {collapse} from './collapsible.js';
import buildSidebar from './sidebar/sidebar.js';
import { buildNav, newItemNav } from './sidebar/nav.js';
import { navprojects } from './sidebar/projects.js';
import clearDiv from './clearDiv.js'
import projectForm from './projectform.js';
import todoForm from './todoform.js';
import domevents from './domevents.js';
import { listener } from './listener.js';
import events from './events.js'

buildHeader();
buildSidebar();
buildNav();
newItemNav();

let defaultProject = new project('Default Project', []);
let defaultProject2 = new project('My Hectic Life', []);
let newTodo = new todo('Grocery Shop', 'Go Grocery Shopping at Meijer', '06/18/2022', 'low', 'get milk and cookies', 'incomplete');
let newTodo2 = new todo('Run Errands', 'Run all My errands', '06/18/2022', 'med', `don't forget the bank`, 'incomplete');
let newTodo3 = new todo('Pick Up Kids', 'Pick up the kids from school', '06/18/2022', 'high', `don't forget Sally!!!!`, 'incomplete');


addToDo(defaultProject, newTodo);
addToDo(defaultProject2, newTodo2);
addToDo(defaultProject2, newTodo3);

addProject(defaultProject);
addProject(defaultProject2);

navprojects();
collapse();
projectForm();
todoForm();
domevents.newProject();
domevents.newToDo();
domevents.projectClick();


projectRender(defaultProject2);
listener();
