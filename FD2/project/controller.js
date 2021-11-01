class Controller{
  constructor(_model, _container) {
    this.model = _model;
    this.container =_container
    window.addEventListener("hashchange", this.updateState);
    this.updateState(); 
    this.listeners();
    
  }
  updateState = ()=>{
    this.model.updateState();
    
  }
  listeners = ()=>{
    document.addEventListener('click',(e)=>{
      let target = e.target;
      let goBackbtn = document.getElementById('goBack');
       if(target === goBackbtn){ //если таргет равен кнопке назад
         this.model.goBack();
       }
    })
  }
}