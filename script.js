// Hent h1 elementet fra HTML dokumentet
const h1 = document.querySelector("#h1");

// Sjekk at vi har henta riktig h1 element
console.log(h1);

// Gi h1 elementet innhold
h1.textContent = "Hello World";

// 

// Steg 4
// Lag en funksjon som skal aktiveres når knappen trykkes på
function fromInputToP() {
    // Steg 6
    // Hent input elementet fra HTML dokumentet
    // Hent en verdien til elementet med .value
    const input = document.querySelector("#input").value;
    
    // Steg 7
    // Sjekk at vi har hentet riktig input element
    console.log(input);

    // Steg 9
    // Hent p elementet fra HTML dokumentet
    const p = document.querySelector("#p");

    // Steg 10
    // Sjekk at vi har hentet riktig p element
    console.log(p);

    // Steg 11
    // Gi variabelen p innhold fra variabel input
    p.textContent = input;
}

// Steg 2
// Hent button elementet fra HTML dokumentet
const button = document.querySelector("#button");

// Steg 3
// Legg til en eventListner på button variabel som lytter etter et klikk på knappen og tar i mot en funksjon
button.addEventListener("click", fromInputToP)