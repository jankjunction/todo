const buildSidebar = () => {
  const content = document.getElementById('content');
  const sidebarDiv = document.createElement('div');
  sidebarDiv.setAttribute('id', 'sidebar');
  content.appendChild(sidebarDiv);
};

export default buildSidebar;
