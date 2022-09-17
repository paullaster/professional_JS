const regex = /.{1,3}/g;
const randNum = Math.floor(Math.random() * 2) ; 
let tempString = [];
const alphaArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 //console.log(alphaArray[3]);
 let newArray = alphaArray.split('');
let finalString;
for(let index = 0; index < newArray.length; index++) {
    const randomLetter = Math.floor(Math.random() * newArray.length);
    tempString.push(newArray[randomLetter]);
}
let newStringArr = tempString.join('').match(regex);

for(let index = 0; index < newStringArr.length; index++) {
    if(newStringArr[index][1] !== newStringArr[index][2] &&
        (newStringArr[index][1] !== undefined && newStringArr[index][2] !== undefined)) {
            finalString = (newStringArr[index] + newStringArr[index + randNum]).toLowerCase();
        }else{
            if((newStringArr[index][1] !== undefined && newStringArr[index][2] !== undefined) &&
                newStringArr[index][1] !== newStringArr[index][0]){
                    finalString = (newStringArr[index] + newStringArr[index + randNum]).toLowerCase();
                }
        }
}

console.log(finalString);