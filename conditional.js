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