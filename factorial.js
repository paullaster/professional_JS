/**
 * Function for finding factorial of numbers
 */

function factorial(n) {
    let facto = n;
    console.log(facto);
    if (n > 1 ){
        factorial(n - 1);
    }
}

factorial(5);