//////////

const randomNumberArray = [];
console.log(randomNumberArray);

const textInPage = document.querySelector('.list-numbers-random');
console.log(textInPage);

let minNumber = 1;
let maxNumber = 100;
let howManyNumberForArray = 5

// Creiamo i numeri random assicurandoci che non siano uguali
while (randomNumberArray.length < howManyNumberForArray) {
    let randomNumber = Math.floor((Math.random() * 100) + 1);
    if (!randomNumberArray.includes(randomNumber)) {
        randomNumberArray.push(randomNumber)
    }

    randomNumber++
}

textInPage.innerHTML = randomNumberArray;

// Rimuoviamo la lista dopo 30 secondi
const cancelTheNumbers = setTimeout (function() {
    textInPage.innerHTML = '';
}, 30000)

// Chiediamo all'utente con il prompt i numeri che si ricorda
const promptUser = setTimeout (function() {
    let userNumberInTheArray = []
    let yourScore = 0;
    for (let i = 0; i < howManyNumberForArray; i++) {
        let userNumber = parseInt(prompt('Scrivi un numero che ricordi'))
        if (randomNumberArray.includes(userNumber) && !userNumberInTheArray.includes(userNumber)) {
            userNumberInTheArray.push(userNumber)
            yourScore++
        }
    }
    console.log(userNumberInTheArray);

    // Mostriamo la quantita' di numeri individuati e i rispettivi numeri indovinati
    const resultUser = document.querySelector('.result')
    resultUser.innerHTML = `Sono stati indovinati ${yourScore} numeri: ${userNumberInTheArray}`
}, 31000)

