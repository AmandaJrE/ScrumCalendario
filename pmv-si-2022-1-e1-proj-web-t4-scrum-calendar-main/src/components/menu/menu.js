document.viewController = {
  __init() {
    document.querySelector("#add-btn").onclick = this._addClick.bind(this);
  },

  _addClick() {
    this._addClickCallBack();
  },
  _addClickCallBack() {},

  onAddClick(newFunction) {
    this._addClickCallBack = newFunction;
  },
};
