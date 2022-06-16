import './style.css';
import { todo, addToDo } from './todo.js';
import { project, projects, addProject} from './project.js';
import buildHeader from './header.js';
import { render } from './render.js';
import {collapse} from './collapsible.js';
import buildSidebar from './sidebar.js';
import buildNav from './nav.js';
import clearDiv from './clearDiv.js'

buildHeader();
buildSidebar();
buildNav();

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

render();
collapse();