function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}

function openMenu(){
    var sidemenu = document.getElementById("side");
    sidemenu.style.display='block';
}
function hideMenu(){
    var sidemenu = document.getElementById("side");
    sidemenu.style.display='none';
}
function openAddSideMenu(){
    var addsidemenu = document.getElementById("addsidemenu");
    addsidemenu.style.display="block";
}
function closeAddSideMenu(){
    var closeaddsidemenu = document.getElementById('closeaddsidemenu');
    var sidemenu = document.getElementById("side");
    sidemenu.style.display='none';
    addsidemenu.style.display='none';
    
}
function inexthird(){
    document.location.assign("index3.html")
}