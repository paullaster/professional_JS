function stringGenerator(vala,valb,valc) {
    let possibleString = [];
    let a = 'a', b = 'b', c = 'c' ; 
    if(vala < 3 && valb < 3 && valc < 3){
        possibleString.push(a.repeat(vala), b.repeat(valb), c.repeat(valc));
    }else{
        
    }
    //console.log(possibleString.join(''));
}

function bigValue(a,b,c){
    if(a < b ){
        if( c < b ){
            console.log('valb is biggest');
        }else{
            console.log('valc is biggest');
        }
    }else{
        if(a < c){
            console.log('valc is biggest');
        }else{
            console.log('vala is biggest');
        }
    }
}
stringGenerator(80,12,2);