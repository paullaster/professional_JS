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
console.table(fibArray);