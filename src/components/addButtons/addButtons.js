document.viewController = {
  __init() {
    document.querySelectorAll(".btn").forEach(
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
};
