class Model {
  constructor(_view) {
      this.view = _view;
      window.location.hash = "menu";
    }

  updateState(hashPageName) {     // SPA
    this.view.renderContent(hashPageName);
    if(hashPageName==='play'){
      drawField();
    }
    }
  
  goBack() {
    this.view.renderContent('menu');
  }

}