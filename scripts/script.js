/******************************/
/* Menu */
/******************************/


var menuButton = document.querySelector("header nav:nth-of-type(1) button")

var menu = document.querySelector("header nav:nth-of-type(2)")

var closebtn = document.querySelector("#closebutton")

var loadingscreen = document.querySelector(".loadingscreen")

// console.log(closebtn)

function toggleMenu(){
    
    menu.classList.toggle("menu-open")
} 

function remove(){
    menu.classList.remove("menu-open")
}

menuButton.addEventListener("click", toggleMenu)

closebtn.addEventListener("click", remove)


/******************************/
/* dark/light mode */
/******************************/

var toggle = document.getElementById("theme-toggle");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {

    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    var sound = new Audio('assets/birdssleep.mp3');
    var sound2 = new Audio('assets/birds.mp3');

    if (currentTheme === "light") {

        toggle.src = "images/sun.png"
        targetTheme = "dark";
        sound.play();
        
    }
    else {
        toggle.src = "images/moon.png"
        sound2.play();
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};


/******************************/
/* Loading screen */
/******************************/

window.addEventListener('load', function(){



    setTimeout(function(){

        loadingscreen.classList.add("hide-loadingscreen");

     }, 1100);

})
