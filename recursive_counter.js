/**
 * Recursive funtions that counts based on the dynamic number
 */

function dynamicCounter (value) {
    console.log(value);
    if (value === 0) {
        return 1;
    }else {
        if (value < 10) {
            return dynamicCounter(value + 1);
        }
    }
}