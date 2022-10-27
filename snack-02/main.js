/*
il software deve chiedere per 5 volte all'utente di inserire un numero.
il programma stampa la somma di tutti i numeri inseriti
*/

let i = 0;
let sum = 0;

while(i<5){
    let number = parseInt(prompt("Inserire un numero"));
    sum += number;
    i++;
}
console.log("La somma dei numeri inseriti è: " , sum);