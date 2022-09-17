function stringGenerator(vala,valb,valc) {
    let possibleString = [];
    let a = 'a', b = 'b', c = 'c' ; 
    if(vala < 3 && valb < 3 && valc < 3){
        possibleString.push(a.repeat(vala), b.repeat(valb), c.repeat(valc));
    }else{
        bigValue(vala,valb,valc);
    }
    //console.log(possibleString.join(''));
}

function bigValue(a,b,c){
    if(a < b && b < c){
        if( a < c ){
            console.log(c + ' is biggest');
        }
        console.log(a + ' is biggest');
    }
    console.log(b + ' is biggest');
}
stringGenerator(2,10,3);