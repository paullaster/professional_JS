/**
 * simple calculator program
 */

function calculator (options, x, y) {
    let result;
    switch (options) {
        case '+' :
            result = x + y;
            break;
        case '-' :
            result = x - y;
            break; 
        case '*' :
            result = x * y;
            break; 
        case '%' :
            result = x % y;
        case '**' :
            result = x ** y;
            break; 
        default :
          console.error('Unknown');

    }
    console.log(result);
}

calculator('+', 4, 2)