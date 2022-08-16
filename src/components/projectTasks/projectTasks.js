document.viewController = {
  __init() {
    document.querySelector("#btn-add-task").onclick =
      this._taskAddClick.bind(this);

    document.querySelectorAll(".button.page-btn input.button").forEach(
      function (btn) {
        btn.onclick = this._clickButton.bind(this);
      }.bind(this)
    );
  },

  changePage(pageNum) {
    document.querySelectorAll(".Form_container").forEach(function (pageElm) {
      if (pageElm.getAttribute("page") == pageNum) {
        pageElm.removeAttribute("style");
      } else pageElm.style.display = "none";
    });
  },

  openSecPage() {
    this.changePage(2);
    let taskContainer2 = document.querySelector("#tasks-container-2");

    taskContainer2.innerHTML = "";
    document
      .querySelectorAll("#tasks-container > div")
      .forEach(function (taskElm) {
        taskContainer2.appendChild(taskElm.cloneNode(true));
      });
  },

  _clickButton(btn) {
    this._clickButtonCallBack(btn.target);
  },
  _clickButtonCallBack() {},
  onClickButton(newFunction) {
    this._clickButtonCallBack = newFunction;
  },

  _taskAddClick() {
    this.addTask();
  },
  _taskAddClickCalBack() {},

  addTask() {
    let tasksContainer = document.querySelector("#tasks-container");
    let baseTaskElement = tasksContainer.querySelector("#_entrega_base");

    let newIndex = tasksContainer.querySelectorAll(".entrega-item").length;
    let newTask = baseTaskElement.cloneNode(true);
    delete newTask.style.display;
    newTask.id = "entrega-" + newIndex;
    newTask.querySelector("input.entrega-label").placeholder =
      "Entrega Semanal #" + newIndex;

    newTask.removeAttribute("style");
    tasksContainer.appendChild(newTask);
  },
};
