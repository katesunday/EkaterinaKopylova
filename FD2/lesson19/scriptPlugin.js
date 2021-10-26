const myPlugin = function(){
      /* ------- begin view -------- */
      function ModalView() {
        let myModal = null;
        let myModalOverlay = null;
        this.init = function(container,contOverlay) {
            myModal = container;
            myModalOverlay = contOverlay; 
        };
        this.openModalWindow = function(div){
            div.classList.remove('modal_closed');
        };
        this.closeModalWindow = function(openedWindow){
            openedWindow.classList.add('modal_closed');
        };
        this.createModalWindow =  function(id, title, content) {
            this.id = id;
            this.title = title;
            this.content = content;

            let backgroundField = document.createElement('div');
                backgroundField.classList.add('modal-overlay');
                backgroundField.id = this.id;
            let mainField = document.createElement('div');
                mainField.classList.add('modal', 'overlay-default');
            let header = document.createElement('h2');
                header.innerHTML = this.title;
            let fieldContent = document.createElement('div');
                fieldContent.innerHTML = this.content;
            let closeElement = document.createElement('a');
                closeElement.setAttribute('href', '#');
                closeElement.classList.add('modal__close', 'close');
            document.body.appendChild(backgroundField);
            backgroundField.appendChild(mainField);
            mainField.appendChild(header);
            mainField.appendChild(closeElement);
            mainField.appendChild(fieldContent);
           closeElement.addEventListener('click',function(){
            backgroundField.classList.add('modal_closed');
            // backgroundField.setAttribute('data-open', 'false');
           });
    
        }
      };
      /* ------- begin model ------- */
      function ModalModel () {
        let myModalContainer = null;
        let myModalView = null;
    
        this.init = function(view,container) { // тут нужно объяснить
            myModalContainer = container;
            myModalView = view;
        }
        this.setContent = function(button,div){ 
            let replaceArr = div.querySelectorAll('[data-info]'); // инфа о дата отр
            console.log(replaceArr);
            if (replaceArr) {
                replaceArr.forEach(function(elem) {
                    let name = elem.getAttribute('data-info');
                    console.log(name);
                    if (name == 'title') {
                      elem.innerHTML = button.getAttribute('data-supermodal-title');
                    }
                    if (name == 'content') {
                      elem.innerHTML = button.getAttribute('data-supermodal-content');
                    }
                });
            }
        }
        this.openModal = function(div){
            myModalView.openModalWindow(div);
        };
        this.closeModal = function(openedWindow){
            myModalView.closeModalWindow(openedWindow);
        };
        this.createContent = function(id,title,content){
            myModalView.createModalWindow(id,title,content);
            
        }
      };
      /* ----- begin controller ---- */
      function ModalController () {
        let myModalContainer = null;
        let myModalModel = null;
        let openBtns = null;
        let closeBtns = null;
        let id = null;
        let div = null;
        let openedWindow = null;
        this.init = function(model,container){
            myModalContainer = container;
            myModalModel = model;
            openBtns = document.querySelectorAll(['a[data-supermodal]']);
            closeBtns = document.querySelectorAll('.close');
           this.listeners();
        }
        this.listeners = function(){
            openBtns.forEach(button => {
                button.addEventListener('click',function(e){
                    e.preventDefault();
                    id = button.getAttribute('data-supermodal'); // значение дата супермодал равно айди дива
                    div = document.getElementById(id); // и по значению даты супермодал находим нужный див
                    if(div){
                        div.setAttribute('data-open', 'true');
                        myModalModel.setContent(button,div);// передали кнопку и див
                        myModalModel.openModal(div);
                    }
                    else{
                        let title = button.getAttribute('data-supermodal-title');
                        let content = button.getAttribute('data-supermodal-content');
                        console.log(id,title,content);
                       myModalModel.createContent(id,title,content);
                    }
                    
                  
                })
            });
            closeBtns.forEach(button =>{
                button.addEventListener('click',function(e){
                    e.preventDefault();
                    openedWindow = document.querySelector('[data-open = true]');
                    openedWindow.setAttribute('data-open', 'false');
                    myModalModel.closeModal(openedWindow);
                })
            });
        }
      }

      return{
          init: function(){
        // глобальная инициализация
          const appModalView = new ModalView();
          const appModalModel = new ModalModel();
          const appModalController = new ModalController();
          const container = document.getElementById('modal');
          const contOverlay = document.getElementById('modal-overlay');
        // вызвать init-методы...
          appModalView.init(container,contOverlay);
          appModalModel.init(appModalView); // работаес с вью
          appModalController.init(appModalModel,container); // работает с версткой и моделью
          
        
          }
      }
}();