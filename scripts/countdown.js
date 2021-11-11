var timerSpan = document.querySelector('section > p span');
var counter = 10;


//functie voor aftellen 
function updateCountdown(){
    timerSpan.innerHTML = counter + ' seconden';
    counter--;
    if(counter === 0){
        gaNaarHome()
    }
}

//terug naar homepagina
function gaNaarHome(){
    window.location = 'index.html';
}

//tijdsduur voor aftellen
setInterval(updateCountdown, 1000);

