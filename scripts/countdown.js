var timerSpan = document.querySelector('section > p span');
var counter = 10;

function updateCountdown(){
    timerSpan.innerHTML = counter + ' seconden';
    counter--;
    if(counter === 0){
        gaNaarHome()
    }
}

function gaNaarHome(){
    window.location = 'index.html';
}
setInterval(updateCountdown, 1000);
