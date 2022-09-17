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
    if(a < b ){
        if( c < b ){
            console.log(b + ' is biggest');
        }
    }else{
        if(a < c){
            console.log(c + ' is biggest');
        }else{
            console.log(a + ' is biggest');
        }
    }
}
stringGenerator(12,12,2);