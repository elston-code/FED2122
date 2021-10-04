function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");
  let linkButtons = carrousel.querySelectorAll(":scope > a");
  
  let autoScrollInterval = 4000;
  let autoScrollTimer;
	
  
  /****************/
	/* DE BOLLETJES */
	/****************/
  
  // de bolletjes activeren
  function iniBolletjes() {
    for (bolletje of bolletjes) {
			// elk bolletje laten luisteren naar kliks
      bolletje.addEventListener("click", function(e){
				// als er geklikt wordt
        
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// de id van het bijbehorende element bepalen
				let newElementID = this.hash.substring(1); // de # eraf halen
        // dan naar het element met ID scrollen
        scrollToElement(newElementID);
        
        // auto-scroll stoppen als de gebruiker interactie heeft met de carrousel
			  stopAutoScroll();
      });
    }
	}
  
  
  /*****************/
	/* AUTO SCROLLEN */
	/*****************/

	// auto scroll starten
	function startAutoScroll() {
    // de class "autoScrolling" toevoegen aan de carrousel
    carrousel.classList.add("autoScrolling");
    
    // een timer aanzetten
    autoScrollTimer = setInterval(function(){
      // als de timer afgaat naar het volgende element gaan
      goToElement("next");
    }, autoScrollInterval);
   
  }

	// auto scroll stoppen
  function stopAutoScroll() {
    // de class "autoScrolling" verwijderen van de carrousel
    carrousel.classList.remove("autoScrolling");
    // de timer stopzetten
    clearInterval(autoScrollTimer);
  }

	// auto scroll initieren en activeren
  function iniAutoScroll() {
    
    // auto scroll initieel starten
		startAutoScroll();
	}
  
  
  /*****************/
	/* START POSITIE */
	/*****************/
  
	// het eerste element en bolletje actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
    // eerste bolletje current maken
		bolletjes[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  
  /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/
  
  //////////////////////////////////
  // naar volgende/vorige element //
  function goToElement(direction) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
			// checken of nieuwe element bestaat - anders naar laatste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			// het nieuwe element is het volgende broertje/zusje
			newElement = currentElement.nextElementSibling;
			// checken of nieuwe element bestaat - anders naar eerste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}

		// naar het nieuwe element scrollen
		scrollToElement(newElement.id);
  }
  
  
  ///////////////////////////
  // scroll to new element //
  function scrollToElement(elementID) {
    // nieuwe element current element maken
    updateCurrentElement(elementID);

    // scrollLeft van de container aanpassen
    let theElement = carrousel.querySelector("#"+elementID);
    let elementOffset = theElement.offsetLeft;
    carrouselElementsContainer.scrollLeft = elementOffset;

    // de bolletjes updaten
    updateBolletjes(elementID);
  }
  
  
  ////////////////////////////
	// update current element //
	function updateCurrentElement(elementID) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// het nieuwe element opzoeken
		let newElement = carrousel.querySelector("#"+elementID);
		// de class current toevoegen
		newElement.classList.add("current");
	}

  
  //////////////////////
  // update bolletjes //
  function updateBolletjes(elementID){
		// het huidige current bolletje opzoeken
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		// de class current verwijderen
		currentBolletje.classList.remove("current");
		
		// het nieuwe bolletje opzoeken
    let newBolletje = carrousel.querySelector("a[href='#"+elementID+"']");
		// de class current toevoegen
		newBolletje.classList.add("current");
  }

  
	// de bolletjes activeren
  iniBolletjes();	
  // de carrousel bij het begin starten
  iniStartPosition();
  // auto scroll activeren 
  iniAutoScroll();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCaroCarrousel("bolletjesAndAutoScroll");
  //je kunt hier ook meerdere carrousellen activeren
})();