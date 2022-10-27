let n = parseInt( prompt('inserisci un numero') );

let i = 0;
while(i < n){
    // console.log(`il numero del ciclo è: ${i}`)
    let array = [];

    while(array.length < 10){
        let randomNumber = Math.floor(Math.random() * 100);
        array.push(randomNumber);

    }

    console.log(array);
    
    i++;
}

