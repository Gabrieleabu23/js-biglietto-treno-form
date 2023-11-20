
let ticketPrice=0;
 const ageUnder=18, seniorAge=65;
//  INIZIAMO CON IL CHIEDERE QUANTO DISTA LA STAZIONE/DESTINAZIONE
document.getElementById("ricevitore").addEventListener("click",
    function(){ 
        const name_surName= document.getElementById("user_name_surName").value;
        const rangeKm= parseInt((document.getElementById("chilometri").value));
        // DEBUG
        console.log(rangeKm);
        let anni= parseInt(document.getElementById("form_group").value);
        // DEBUG
        // console.log("chilometri: ",rangeKm);
        // console.log("eta'", userAge);
        // PREZZO PER KM
    const ticketKmPrice= 0.21;
    // MOLTIPLICHIAMO I KM DI DISTANZA CON IL PREZZO PER KM
    let ticketPrice= rangeKm*ticketKmPrice;
    // DEBUG
    // console.log(ticketPrice);s

    if(anni === 1){
        // DEBUG
         const scount=(20/100);
        let price=ticketPrice*scount;
        const totalPrice=parseFloat((ticketPrice-price).toFixed(2));
        console.log( "prezzo finale: ",totalPrice);
        // DEBUG
        // console.log(totalPrice);
    }else if (anni === 3){
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
        const totalPrice=ticketPrice;
        console.log( "prezzo finale: ",totalPrice);
        // DEBUG
        // console.log(totalPrice);
    }
    document.querySelector(".width60").classList.remove("d-none");
    document.getElementById("nome_cognome").innerHTML=name_surName;    
}
);
    document.getElementById("reset_button").addEventListener("click",
        function(){
            document.getElementById("main_form").reset();
            document.querySelector(".width60").classList.add("d-none");
        }
    )
    
//  INIZIAMO CON IL CHIEDERE L'ETA'CHE SERVE PER CAPIRE QUANTO DEVE PAGARE
// const userAge= parseInt(prompt("Quanti anni hai?"));


