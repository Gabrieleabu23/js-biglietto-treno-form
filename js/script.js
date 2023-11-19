/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

 let ticketPrice=0;
 const ageUnder=18, seniorAge=65;
//  INIZIAMO CON IL CHIEDERE QUANTO DISTA LA STAZIONE/DESTINAZIONE
const rangeKm= parseInt(prompt("Quanto dista la meta?"));
// DEBUG
console.log(rangeKm);
//  INIZIAMO CON IL CHIEDERE L'ETA'CHE SERVE PER CAPIRE QUANTO DEVE PAGARE
const userAge= parseInt(prompt("Quanti anni hai?"));

// DEBUG
console.log(userAge);
// PREZZO PER KM
const ticketKmPrice= 0.21;
// MOLTIPLICHIAMO I KM DI DISTANZA CON IL PREZZO PER KM
ticketPrice= rangeKm*ticketKmPrice;
// DEBUG
console.log(ticketPrice);

if(userAge < ageUnder){
    // DEBUG
    // console.log("minore");
    const scount=(20/100);
    let price=ticketPrice*scount;
    const totalPrice=parseFloat((ticketPrice-price).toFixed(2));
    document.getElementById("costo_biglietto").innerHTML= totalPrice;
    // DEBUG
    // console.log(totalPrice);
}else if (userAge >seniorAge){
    // DEBUG
    // console.log("vecchio");
    const scount=(40/100);
    let price=ticketPrice*scount;
    const totalPrice=parseFloat((ticketPrice-price).toFixed(2));
    document.getElementById("costo_biglietto").innerHTML= totalPrice;
    // DEBUG
    // console.log(totalPrice);
}
else{
    document.getElementById("costo_biglietto").innerHTML= ticketPrice;
    // DEBUG
    // console.log(totalPrice);
}
