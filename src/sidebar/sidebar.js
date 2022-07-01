const buildSidebar = () => {
  let content = document.getElementById("content");
  let sidebarDiv = document.createElement("div");
  sidebarDiv.setAttribute("id", "sidebar");
  content.appendChild(sidebarDiv);
};

export default buildSidebar;
