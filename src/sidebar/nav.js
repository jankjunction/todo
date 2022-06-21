const buildNav = (() => {
    let sidebarDiv = document.getElementById('sidebar');

    let nav = document.createElement('span');
    nav.setAttribute('id', 'nav');

    let today = document.createElement('span');
    today.setAttribute('id', 'today');
    today.textContent = 'Today';
    
    let thisWeek = document.createElement('div');
    thisWeek.setAttribute('id', 'this-week');
    thisWeek.textContent = 'This Week';

    nav.appendChild(today);
    nav.appendChild(thisWeek);
    sidebarDiv.appendChild(nav);
});

const newItemNav = (() => {
    let sidebarDiv = document.getElementById('sidebar');

    let createNav = document.createElement('div');
    createNav.setAttribute('id', 'createNew');

    let newProject = document.createElement('span');
    newProject.setAttribute('id', 'new-project');
    newProject.textContent = 'New Project';
    
    let newTodo = document.createElement('span');
    newTodo.setAttribute('id', 'new-todo');
    newTodo.textContent = 'New Todo';

    createNav.appendChild(newProject);
    createNav.appendChild(newTodo);
    sidebarDiv.appendChild(createNav);
});



export { buildNav, newItemNav };