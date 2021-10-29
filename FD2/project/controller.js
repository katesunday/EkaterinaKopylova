class Controller{
  constructor(_model, _container) {
    this.model = _model;
    this.container =_container
    window.addEventListener("hashchange", this.updateState);
    this.updateState(); 
  }
   updateState = function() {
    console.log(updateState)
    this.model.updateState();
}
}