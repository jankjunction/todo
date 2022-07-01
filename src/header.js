const buildHeader = () => {
  let content = document.getElementById("content");
  let header = document.createElement("div");
  let logoText = document.createElement("span");

  logoText.textContent = "toDoozr";

  logoText.setAttribute("id", "logoText");
  header.setAttribute("id", "header");

  content.appendChild(header);
  header.appendChild(logoText);
};

export default buildHeader;
