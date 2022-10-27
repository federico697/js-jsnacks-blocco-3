let somma = 0;

let array = [];

while(somma < 50){
    let number = parseInt(prompt("Inserisci un numero"));

    if (number > 50){
        alert('inserisci un numero minore di 50')
    } else {
        array.push(number);
        somma = somma + number;
    }
}

console.log(array);
console.log("la somma è: ", somma);