const buildNav = (() => {
    let sidebarDiv = document.getElementById('sidebar');

    let today = document.createElement('div');
    today.setAttribute('id', 'today');
    today.textContent = 'Today';
    
    let thisWeek = document.createElement('div');
    thisWeek.setAttribute('id', 'this-week');
    thisWeek.textContent = 'This Week';

    sidebarDiv.appendChild(today);
    sidebarDiv.appendChild(thisWeek);
});


export default buildNav;