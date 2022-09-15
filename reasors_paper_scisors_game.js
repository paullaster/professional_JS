/**
 * Rock beats up scissors and 
 * paper will beat out rock
 * scissors will beat out paper
 */
const playItems = ['rock', 'paper', 'scissors'];
const humanPlayer = parseInt(prompt("Enter number between 0 and 2 to play : "));
const computerPlayer = Math.floor(Math.random() * 2) + 1;
 //player
const humanPlayerItemSelected = playItems[humanPlayer];
const computerPlayerItemSelected = playItems[computerPlayer];

if(humanPlayerItemSelected === computerPlayerItemSelected){
    console.log("YOU HAVE DRAWN", humanPlayerItemSelected, computerPlayerItemSelected);
}else if(
    humanPlayerItemSelected ===  'rock'
    && computerPlayerItemSelected === 'scissors'){
        console.log(`Human player WON, \n  
        Human player selected: ${humanPlayerItemSelected} and \n 
        Computer player selected: ${computerPlayerItemSelected}`);
}else if(
    humanPlayerItemSelected ===  'scissors'
    && computerPlayerItemSelected === 'rock'){
        console.log(`Computer player WON, \n  
        Human player selected: ${humanPlayerItemSelected} and \n 
        Computer player selected: ${computerPlayerItemSelected}`);
}else if(
    humanPlayerItemSelected ===  'paper'
    && computerPlayerItemSelected === 'rock'){
        console.log(`Human player WON, \n  
        Human player selected: ${humanPlayerItemSelected} and \n 
        Computer player selected: ${computerPlayerItemSelected}`);
}else if(
    humanPlayerItemSelected ===  'rock'
    && computerPlayerItemSelected === 'paper'){
        console.log(`computer player WON, \n  
        Human player selected: ${humanPlayerItemSelected} and \n 
        Computer player selected: ${computerPlayerItemSelected}`);
}else if(
    humanPlayerItemSelected ===  'paper'
    && computerPlayerItemSelected === 'scissors'){
        console.log(`Computer player WON, \n  
        Human player selected: ${humanPlayerItemSelected} and \n 
        Computer player selected: ${computerPlayerItemSelected}`);
}else if(
    humanPlayerItemSelected ===  'scissors'
    && computerPlayerItemSelected === 'paper'){
        console.log(`Human player WON, \n  
        Human player selected: ${humanPlayerItemSelected} and \n 
        Computer player selected: ${computerPlayerItemSelected}`);
}else{
    console.log("WRONG INPUT")
}
//console.log(shufflePlayItems(playItems));
