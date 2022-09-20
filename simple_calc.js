/**
 * simple calculator program
 */
let fnum = parseInt(prompt('Enter the first number: '));
let snum = parseInt(prompt('Enter the second number: '));
let op = prompt('Enter operation to perform: ')
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
            break;
        case '**' :
            result = x ** y;
            break; 
        default :
          console.error('Unknown');

    }
    console.log(result);
}
//Spread operators
let someArray = [fnum, snum];
let opArr = [op]
calculator(...opArr, ...someArray);

//Resp operators
function greeter(salute, ...args) {
    console.log(salute, ...args);
}
greeter('Hi,', 'Geeky!', 'How is the going?', 'We\'ve been on a coding trip', 'What do you think?');