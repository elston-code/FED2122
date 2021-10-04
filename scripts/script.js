/******************************/
/* Menu */
/******************************/


var menuButton = document.querySelector("header nav:nth-of-type(1) button")

var menu = document.querySelector("header nav:nth-of-type(2)")
 
var closebtn = document.querySelector("#closebutton")

// console.log(closebtn)

function toggleMenu(){

    menu.classList.toggle("menu-open")
} 

function remove(){
    menu.classList.remove("menu-open")
}

menuButton.addEventListener("click", toggleMenu)

closebtn.addEventListener("click", remove)


