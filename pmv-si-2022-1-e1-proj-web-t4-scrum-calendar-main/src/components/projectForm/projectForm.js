document.viewController = {
  __init() {
    document.querySelectorAll("#form-add .button").forEach(
      function (btn) {
        btn.onclick = this._clickButton.bind(this);
      }.bind(this)
    );
  },

  _clickButton(btn) {
    this._clickButtonCallBack(btn.target);
  },
  _clickButtonCallBack() {},
  onClickButton(newFunction) {
    this._clickButtonCallBack = newFunction;
  },

  changeMode(newMode, preventRender = false) {
    document._showMode = newMode;
    if (!preventRender) this.updateRender();
  },

  changeWindowLabel(newLabel) {
    document.querySelector("#dynamic-label").textContent = newLabel;
  },

  getFieldValue(fieldId) {
    return document.querySelector(fieldId + ".field").value;
  },

  getData() {
    let data = {};
    document.querySelectorAll("input.field").forEach(function (field) {
      if (field.type == "checkbox") {
        data[field.name] = field.checked;
      } else data[field.name] = field.value;
    });
    return data;
  },

  setData(newData) {
    document.querySelectorAll(".field").forEach(function (field) {
      let newVal = newData[field.name];

      if (field.type == "checkbox")
        field.checked = newVal !== undefined && newVal !== null ? newVal : "";
      else field.value = newVal !== undefined && newVal !== null ? newVal : "";
    });
  },

  clearData() {
    this.setData({});
  },

  updateRender() {
    document.querySelectorAll("#form-add *[show-mode]").forEach(
      function (elemento) {
        if (
          elemento
            .getAttribute("show-mode")
            ?.split(",")
            .includes(document._showMode)
        ) {
          elemento.style.display =
            elemento.getAttribute("default-display-mode") || "initial";
        } else elemento.style.display = "none";
      }.bind(this)
    );
  },
};
