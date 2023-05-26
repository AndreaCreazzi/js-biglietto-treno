// Controllo funzionamento javascript

console.log(`JS OK`)

//Prendo gli elementi dal DOM

const priceTicket = document.getElementById(`price`)

console.log(priceTicket)

const noDiscount = document.getElementById(`no-discount`)

const kilometers = document.getElementById(`kilometers`)

const age = document.getElementById(`age`)

//Chiedo all'utente quanti chilometri vuole percorrere

const askKilometers = parseInt(prompt(`Quanti chilometri vuole percorrere?` , 5))

console.log(askKilometers)

//Chiedo all'utente l'età

const askAge = parseInt(prompt(`Quanti anni ha?` , 25))

console.log(askAge)

//inserisco il prezzo del bigletto

const ticket = 0.21

console.log(ticket)

//Calcolo il prezzo del bigletto in base ai chilometri

const totalPrice = askKilometers * ticket

const fixedPrice = totalPrice.toFixed(2)

//Calcolo lo sconto del 20% per i minori di 18 anni

const underDiscount = 20 / 100

let discount = fixedPrice * underDiscount

console.log(underDiscount)

//Calcolo lo sconto del 40% per i minori di 65 anni

const overDiscount = 40 / 100

discount = fixedPrice * overDiscount

console.log(overDiscount)

//Applico gli sconti 

if(askAge < 18){
   discount *= underDiscount;
} else if (askAge > 65){
   discount *= overDiscount;
}

console.log(discount.toFixed(2))

//inserire gli elementi nel DOM

priceTicket.innerText = discount.toFixed(2)

noDiscount.innerText = fixedPrice

kilometers.innerText = askKilometers

age.innerHTML = askAge