document.viewController = {
  __init(parentIframe) {
    this.parentIframe = parentIframe;
  },

  showModal(modalId) {
    /** Esconde outros modais */
    document
      .querySelectorAll(".modal-content")
      .forEach(function (modalContent) {
        modalContent.style.display = "none";
      });

    this.parentIframe.parentElement.style.display = "inherit";
    let modalReference = document.querySelector(modalId);
    modalReference.style.display = "inherit";
    return modalReference;
  },

  getModalReference(modalId) {
    return document.querySelector(modalId);
  },

  hideModal() {
    document
      .querySelectorAll(".modal-content")
      .forEach(function (modalContent) {
        modalContent.style.display = "none";
      });

    this.parentIframe.parentElement.style.display = "none";
  },
};
