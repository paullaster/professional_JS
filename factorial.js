/**
 * Function for finding factorial of numbers
 */

function factorial(n) {
    //console.log(n);
    if (n === 1 ){
        return 1;
    }else {
        return n * factorial(--n);
    }
    
}

//console.log(factorial(5));

//countdown function
function countDown (n) {
    for (let i = 10; i > 0; i--) {
        console.log(n--);
    }
}
countDown(10);