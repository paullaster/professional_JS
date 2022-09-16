const nameArray = ['Fred', 'John', 'Joseph', 'Job', 'Ricky', 'Rose', 'Ruth', 'Ravine'];
let isInTheList = false;

while(!isInTheList && nameArray.length > 0) {
    let isFound = nameArray.includes('John');   
    if(isFound) {
        isInTheList = true;
        let posOfSearch = nameArray.indexOf('John');
        let searchValue = nameArray[posOfSearch];
        console.log(posOfSearch, searchValue);
    }
    let removed = nameArray.shift();
    console.log(removed,'\n', nameArray);
}