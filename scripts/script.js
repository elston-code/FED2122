/******************************/
/* Menu */
/******************************/


var menuButton = document.querySelector("header nav:nth-of-type(1) button")

var menu = document.querySelector("header nav:nth-of-type(2)")
 

function toggleMenu(){

    menu.classList.toggle("menu-open")
} 

menuButton.addEventListener("click", toggleMenu)



