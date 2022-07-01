import { getCurrentProject, projects, deleteProject } from "./project";
import clearDiv from "./clearDiv";
import { projectRender } from "./projectrender";
import { todayRender, thisWeekRender } from "./timerender";
import { getToDoById, deleteToDo } from "./todo";
import events from "./events";
import { getToDoContainer } from "./gettodocontainer";

const domevents = (() => {
  const newProject = () => {
    let content = document.getElementById("content");

    content.addEventListener("click", (e) => {
      if (e.target.id === "new-project") {
        let projectForm = document.getElementById("project-form");
        projectForm.classList.toggle("invisible");
      }
    });
  };

  const newToDo = () => {
    let content = document.getElementById("content");

    content.addEventListener("click", (e) => {
      if (e.target.id === "new-todo") {
        if (e.target.childNodes[0].data === "+ new todo") {
          let todoForm = document.getElementById("todo-form");
          todoForm.classList.toggle("invisible");
        }
      }
    });
  };

  const projectClick = () => {
    let sidebar = document.getElementById("sidebar");

    sidebar.addEventListener("click", (e) => {
      if (e.target.attributes[0].nodeValue === "nav-project") {
        let projectContainer = document.getElementById("project-container");
        clearDiv(projectContainer);
        for (let i = 0; i < projects.projects.length; i++) {
          if (e.target.lastChild.innerText === projects.projects[i].id) {
            projectRender(projects.projects[i]);
            events.emit("Project Changed", "");
          }
        }
      }
    });
  };

  const todayClick = () => {
    let sidebar = document.getElementById("sidebar");

    sidebar.addEventListener("click", (e) => {
      if (e.target.attributes[0].nodeValue === "today") {
        let projectContainer = document.getElementById("project-container");
        clearDiv(projectContainer);
        events.emit("Project Changed", "");
        todayRender();
      }
    });
  };

  const thisWeekClick = () => {
    let sidebar = document.getElementById("sidebar");

    sidebar.addEventListener("click", (e) => {
      if (e.target.attributes[0].nodeValue === "this-week") {
        let projectContainer = document.getElementById("project-container");
        clearDiv(projectContainer);
        events.emit("Project Changed", "");
        thisWeekRender();
      }
    });
  };

  const toDoClick = () => {
    let content = document.getElementById("content");
    content.addEventListener("click", (e) => {
      if (
        e.target.parentElement.attributes[0] ||
        e.target.classList[0] === "todo"
      ) {
        if (e.target.parentElement.attributes[0].nodeValue === "todo") {
          let currentToDo = getToDoById(
            e.target.parentElement.childNodes[2].textContent
          );
          getToDoContainer();
          events.emit("Render ToDo", currentToDo);
        }
      }
    });
  };

  const deleteToDoClick = () => {
    let content = document.getElementById("content");
    content.addEventListener("click", (e) => {
      if (e.target.textContent === "Delete ToDo") {
        let currentToDo = getToDoById(
          e.target.parentElement.childNodes[0].textContent
        );
        deleteToDo(getCurrentProject(), currentToDo);
      }
    });
  };

  const deleteProjectClick = () => {
    let content = document.getElementById("content");
    content.addEventListener("click", (e) => {
      if (e.target.id === "project-delete") {
        getToDoContainer();
        deleteProject(getCurrentProject());
      }
    });
  };

  const editProjectTitle = () => {
    let content = document.getElementById("content");
    content.addEventListener("focusout", (e) => {
      if (e.target.parentElement.classList[0] === "project-header") {
        events.emit("Project Edited", [
          e.target.id,
          "name",
          e.target.textContent,
        ]);
        let projectsNav = document.getElementById("projects-nav");
        events.emit("Clear Div", projectsNav);
        events.emit("Render Sidebar", "");
      }
    });
  };

  const editToDoTitle = () => {
    let content = document.getElementById("content");
    content.addEventListener("focusout", (e) => {
      if (e.target.id === "todo-title") {
        let currentProject = getCurrentProject();
        events.emit("ToDo Edited", [
          currentProject.id,
          e.target.parentElement.firstElementChild.textContent,
          "name",
          e.target.textContent,
        ]);
        let projectContainer = document.getElementById("project-container");
        events.emit("Clear Div", projectContainer);
        events.emit("Render Project", currentProject);
      }
    });
  };

  const editToDoDueDate = () => {
    let content = document.getElementById("content");
    content.addEventListener("focusout", (e) => {
      if (e.target.id === "todo-duedate" || e.target.id === "todo-priority") {
        let currentProject = getCurrentProject();
        events.emit("ToDo Edited", [
          currentProject.id,
          e.target.parentElement.parentElement.firstElementChild.textContent,
          "dueDate",
          e.target.value,
        ]);
        let projectContainer = document.getElementById("project-container");
        events.emit("Clear Div", projectContainer);
        events.emit("Render Project", currentProject);
      }
    });
  };

  const editToDoPriority = () => {
    let content = document.getElementById("content");
    content.addEventListener("focusout", (e) => {
      if (e.target.id === "todo-priority-select") {
        let currentProject = getCurrentProject();
        events.emit("ToDo Edited", [
          currentProject.id,
          e.target.parentElement.parentElement.firstElementChild.textContent,
          "priority",
          e.target.value,
        ]);
        let projectContainer = document.getElementById("project-container");
        events.emit("Clear Div", projectContainer);
        events.emit("Render Project", currentProject);
      }
    });
  };

  const editToDoDescription = () => {
    let content = document.getElementById("content");
    content.addEventListener("focusout", (e) => {
      if (e.target.id === "todo-description") {
        let currentProject = getCurrentProject();
        events.emit("ToDo Edited", [
          currentProject.id,
          e.target.parentElement.parentElement.firstElementChild.textContent,
          "description",
          e.target.textContent,
        ]);
        let projectContainer = document.getElementById("project-container");
        events.emit("Clear Div", projectContainer);
        events.emit("Render Project", currentProject);
      }
    });
  };

  const editToDoNotes = () => {
    let content = document.getElementById("content");
    content.addEventListener("focusout", (e) => {
      if (e.target.id === "todo-notes") {
        let currentProject = getCurrentProject();
        events.emit("ToDo Edited", [
          currentProject.id,
          e.target.parentElement.parentElement.firstElementChild.textContent,
          "notes",
          e.target.textContent,
        ]);
        let projectContainer = document.getElementById("project-container");
        events.emit("Clear Div", projectContainer);
        events.emit("Render Project", currentProject);
      }
    });
  };

  return {
    newProject: newProject,
    newToDo: newToDo,
    projectClick: projectClick,
    todayClick: todayClick,
    thisWeekClick: thisWeekClick,
    toDoClick: toDoClick,
    deleteToDoClick: deleteToDoClick,
    editProjectTitle: editProjectTitle,
    deleteProjectClick: deleteProjectClick,
    editToDoTitle: editToDoTitle,
    editToDoDueDate: editToDoDueDate,
    editToDoPriority: editToDoPriority,
    editToDoDescription: editToDoDescription,
    editToDoNotes: editToDoNotes,
  };
})();

export default domevents;
