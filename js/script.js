// Controllo funzionamento javascript

console.log(`JS OK`);

//Prendo gli elementi dal DOM

const priceTicket = document.getElementById(`price`);

console.log(priceTicket);

const noDiscount = document.getElementById(`no-discount`);

const kilometers = document.getElementById(`kilometers`);

const age = document.getElementById(`age`);

//Chiedo all'utente quanti chilometri vuole percorrere

const askKilometers = parseInt(prompt(`Quanti chilometri vuole percorrere?` , 5));

console.log(askKilometers);

//Chiedo all'utente l'età

const askAge = parseInt(prompt(`Quanti anni ha?` , 25));

console.log(askAge);

//inserisco il prezzo del bigletto

const ticket = 0.21;

console.log(ticket);

//Calcolo il prezzo del bigletto in base ai chilometri

let totalPrice = (askKilometers * ticket).toFixed(2);

let discount;

//Calcolo lo sconto del 20% per i minori di 18 anni

const underDiscount = 0.8;

console.log(underDiscount);

//Calcolo lo sconto del 40% per i minori di 65 anni

const overDiscount = 0.6;

console.log(overDiscount)

//Applico gli sconti 

if(askAge < 18){
   discount = (totalPrice * underDiscount).toFixed(2);
}else if(askAge > 65){
   discount = (totalPrice * overDiscount).toFixed(2);
}

console.log(discount);

//inserire gli elementi nel DOM

priceTicket.innerText = discount;

if(discount === undefined){
   priceTicket.innerText = totalPrice;
}

noDiscount.innerText = totalPrice;

kilometers.innerText = askKilometers;

age.innerHTML = askAge;