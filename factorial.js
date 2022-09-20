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
    
};

//console.log(factorial(5));

//countdown function
function countDown (n) {
    console.log(n);
    if (n < 1) return;
    return countDown(n - 1);
};
countDown(10);