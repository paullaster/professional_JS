const nameArray = ['Fred', 'John', 'Joseph', 'Job', 'Ricky', 'Rose', 'Ruth', 'Ravine'];
let isInTheList = false;

while(!isInTheList && nameArray.length > 0) {
    let isFound = nameArray.includes('John');   
    if(isFound) {
        isInTheList = true;
        let posOfSearch = nameArray.indexOf('John');
        let searchValue = nameArray[posOfSearch];
        //console.log(posOfSearch, searchValue);
    }
    let removed = nameArray.shift();
    //console.log(removed,'\n', nameArray);
}


/**
 * Fibonacci
 */
let fnum = 0;
let snum = 1;
let temp;

let fibArray = [];

while(fibArray.length < 25){
    fibArray.push(fnum);

    temp = fnum + snum;
    fnum = snum;
    snum = temp;
}
//console.table(fibArray);


/**
 * Number gazing
 */

let maxGuess = 10;
let minGuess = 0;
let guessArray = [];
let randArray = [];
let counter = 0;
const regex = /^[0-9]+$/;
let numbersMatched;
let match
while(randArray.length < maxGuess){
    let randArrayItems = Math.floor(Math.random() * maxGuess) + 1;
    randArray = [...randArray, randArrayItems];
}
while(guessArray.length < maxGuess){
    let guesses = prompt("Enter your guess number : Between "
                        +minGuess +  " and "+maxGuess 
                        + "\n  You have played " + counter + " rounds." );
    if(guesses.match(regex)){
        let playerGuess = parseInt(guesses);
        if(playerGuess > maxGuess){
            alert(playerGuess + " is too big. Please try again. By choosing between "+maxGuess+" and "+minGuess+".");
            break;
        }
        guessArray = [...guessArray, playerGuess];
        counter++;
    }else{
        alert("Your selection must be a number!");
        break;
    }
}
let count = 0;
for(let items of guessArray){
    match = randArray.indexOf(items);
    if(match >= 0){
        count++;
        numbersMatched = randArray[match];
        console.log(`Count: ${count} \n
            Position: ${match} \n
            Number : ${numbersMatched}`);
    }
    count = count;
}
if(count >8){
    alert(`CONGRATULATIONS............\n You have matched ${count} numbers
    \n You have WON KES. 10,000`);
}else{
    alert(`OOOOUCHHH!!!\n You have matched ${count} numbers \n
    you LOST the game, Please play again.!`);
}
//console.table(guessArray);