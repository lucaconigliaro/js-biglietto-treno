//Chilometri da percorrere
const userKm = prompt ("Quanto è lungo il tuo viaggio?");
const userKmAsInt = parseInt (userKm);
console.log (userKmAsInt);

//Età dell'utente
const userAge = prompt ("Quanti anni hai?");
const userAgeAsInt = parseInt (userAge);
console.log (userAgeAsInt);

//Prezzo Biglietto 
const ticketPrice = userKm * 0.21;

//Sconto 
let message
if (userAge < 18) {
    discount = ticketPrice - (ticketPrice / 100 * 20);
    message = `Il costo del biglietto applicato allo sconto per la tua età è di ${discount.toFixed(2)}€`;
}
else if ( userAge > 65) {
    discount = ticketPrice - (ticketPrice / 100 * 40);
    message = `Il costo del biglietto applicato allo sconto per la tua età è di ${discount.toFixed(2)}€`;
}
else {
    discount = ticketPrice;
    message = `Il costo del biglietto è di ${discount.toFixed(2)}€`;
}


//Output
console.log (message);
