
function gameInit(container) {
    let socobanView = new View(container);
    let socobanModel = new Model(View);
    let socobanController = new Controller(Model, container);
}

document.addEventListener("DOMContentLoaded", gameInit(document.querySelector("#app")));