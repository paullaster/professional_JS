/*let age = parseInt(prompt("Enter your age"));
let message = "You are denied entry"
if(age > 21){
    message ="You are allowed entry to the venue and you can also buy alcohol";
    console.log(message);
}else if(age > 19){
    message ="You are allowed entry to the venue";
    console.log(message);
}else{
    message;
    console.log(message);
}*/
//console.log(typeof age);
//
/*let ID = "invalid";
ID ==="valid" ? 
console.log("Allowed entry to the venue")
: console.log("Denied access to the venue");
*/
/*
let randonNum = Math.floor(Math.random() *6);
let usrInput = prompt("say something");
switch (randonNum){
    case 0:
        console.log(randonNum + " zero");
        break;
    case 1:
        console.log(randonNum + " one");
        break;
    case 2:
        console.log(randonNum + " two");
        break;
    case 3:
        console.log(randonNum + " three");
        break;
    case 4:
        console.log(randonNum + " four");
        break;
    case 5:
        console.log(randonNum + " five");
        break;
    default:
        console.log(randonNum + " unknown");
        break;
}
//console.log(randonNum, usrInput);
*/

/**
 * Dynamic number game
 */
let randNum = Math.floor(Math.random() * 10) + 1;
let usrGamingNum = parseInt(prompt("Enter the number to play: Must be between 0 and 10"));
if(usrGamingNum === randNum){
    console.log(`You won by matching my dynamic number: ${randNum}`);
}else if(usrGamingNum > randNum){
    console.log(`Your pick was higher than my dynamic number:
     ${randNum}, Your pick: ${usrGamingNum} please try again!`);
}else{
    console.log(`Your pick was lower than my dynamic number:
     ${randNum}, Your pick: ${usrGamingNum} please try again!`);
}