// Descrizione:
// Un alert() espone 5 numeri generati casualmente.

// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


var randomNumbers = [];  //questo array contiene i numeri generati casualmente dal computer
var userNumbers = [];   // questo array contiene i numeri inseriti tramite il prompt dall'utente
var wrongUserNumbers = [];  // in questo array devono essere pushati tutti i numeri inseriti dall'utente che non corrispondono a quelli generati dal computer

// creo un alert che esponga 5 numeri generati casualmente
while (randomNumbers.length < 5){
    var correctNumbers = Math.floor(Math.random() * 5);
    if (randomNumbers.indexOf(correctNumbers) == -1){
        randomNumbers.push(correctNumbers);
    } 
}


alert("Questi sono i numeri che devi ricordare" + randomNumbers);

// creo un timeOut con scadenza 30 secondi al termine del quale l'utente dovrà inserire i numeri visualizzati con un prompt()

setTimeout(function() {
    for (var j = 0; j < 5; j++) {
        var inputNumber = parseInt(prompt("Inserisci, uno alla volta i 5 numeri prima visualizzati"));
        if (randomNumbers.includes(inputNumber)){
            userNumbers.push(inputNumber);
        } else {
            wrongUserNumbers.push(inputNumber);
        }
    }
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    document.getElementById("results").innerHTML = "i numeri iniziali erano " + randomNumbers + " i numeri corretti inseriti sono " + userNumbers + " mentre quelli che hai inserito errati sono " + wrongUserNumbers;
},3000)

