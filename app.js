const mainMenu = document.querySelector(".links");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
let scrollEl = document.querySelector(".appliant")

openMenu.addEventListener('click', function(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
})
closeMenu.addEventListener('click', function(){
    mainMenu.style.top = "-100%";
})

function display(){
    mainMenu.style.top = "-100%";
}