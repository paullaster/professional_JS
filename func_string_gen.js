function stringGenerator(vala,valb,valc) {
    let possibleString = [];
    let a = a, b = b, c = c ; 
    if(vala < 3 && valb < 3 && valc < 3){
        possibleString.push(a.repeat(vala), b.repeat(valb), c.repeat(valc));
    }
    console.log(possibleString.join(''));
}
stringGenerator(2,1,2);