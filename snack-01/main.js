
let somma = 0;
let array = [];

while(somma < 50){
    let number = parseInt(prompt("Inserisci un numero"));
    somma += number;
    array.push(number);
}

console.log(array);
console.log("la somma è: ", somma);