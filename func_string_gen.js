function stringGenerator(vala,valb,valc) {
    let possibleString = [];
    let a = 'a', b = 'b', c = 'c' ; 
    if(vala < 3 && valb < 3 && valc < 3){
        possibleString.push(a.repeat(vala), b.repeat(valb), c.repeat(valc));
    }else{
        for(let i = 0; i < vala; i++){
            if(i < 2){
                possibleString.push(a.repeat(1));
            }
        }
        for(let j = 0; j < valb; j++){
            possibleString.push(b.repeat(1));
        }
        for(let k = 0; k < valc; k++){
            possibleString.push(c.repeat(1));
        }
    }
    console.log(possibleString.join(''));
}

function bigValue(a,b,c){
    if(a < b ){
        if( c < b ){
            return b;
        }
    }else{
        if(a < c){
            return c;
        }else{
            return a;
        }
    }
}
stringGenerator(8,1,1);