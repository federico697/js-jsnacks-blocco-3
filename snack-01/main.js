//variable sum
let somma = 0;

//create an empty array
let array = [];


//check untill the sum lower than 50
while(somma < 50){
    //ask the number
    let number = parseInt(prompt("Inserisci un numero"));
    //add the number in a sum
    somma += number;
    //add the value in the array
    array.push(number);
}

//print the array
console.log(array);
//print the sum
console.log("la somma è: ", somma);