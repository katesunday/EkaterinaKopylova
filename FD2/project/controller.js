class Controller{
  constructor(_model, _container) {
    this.model = _model;
    this.container =_container
    window.addEventListener("hashchange", this.updateState);
    this.updateState(); 
    this.listeners();
    
  }
  updateState = ()=>{
    const hashPageName = window.location.hash.slice(1).toLowerCase();
    this.model.updateState(hashPageName);
    
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