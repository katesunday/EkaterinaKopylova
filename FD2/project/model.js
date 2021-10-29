class Model {
  constructor(_view) {
      this.view = _view;
      window.location.hash = "menu";
    }

 updateState() {     // SPA
    const hashPageName = window.location.hash.slice(1).toLowerCase();

    this.view.renderContent(hashPageName);
    }
  }