
let ticketPrice=0;
 const ageUnder=18, seniorAge=65;
//  INIZIAMO CON IL CHIEDERE QUANTO DISTA LA STAZIONE/DESTINAZIONE
document.getElementById("ricevitore").addEventListener("click",
    function(){
        const rangeKm= parseInt(document.getElementById("chilometri").value);
        const userAge= parseInt(document.getElementById("etauser").value);
        // DEBUG
        console.log("chilometri: ",rangeKm);
        console.log("eta'", userAge);
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
        console.log( "prezzo finale: ",totalPrice);
        // DEBUG
        // console.log(totalPrice);
    }else if (userAge >seniorAge){
        // DEBUG
        // console.log("vecchio");
        const scount=(40/100);
        let price=ticketPrice*scount;
        const totalPrice=parseFloat((ticketPrice-price).toFixed(2));
        console.log( "prezzo finale: ",totalPrice);
        // DEBUG
        // console.log(totalPrice);
    }
    else{
        console.log( "prezzo finale: ",totalPrice);
        // DEBUG
        // console.log(totalPrice);
    }
        }
);
//  INIZIAMO CON IL CHIEDERE L'ETA'CHE SERVE PER CAPIRE QUANTO DEVE PAGARE
// const userAge= parseInt(prompt("Quanti anni hai?"));


