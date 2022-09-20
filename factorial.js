/**
 * Function for finding factorial of numbers
 */

function factorial(n) {
    console.log(n);
    if (n === 1 ){
        return 1;
    }else {
        return n * factorial(n - 1);
    }
    
}

factorial(5);