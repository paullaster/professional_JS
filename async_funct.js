/**
 * Timer functions
 */

function one () {
    console.log("one");
    three();
};

function two () {
    one();
    console.log("two");
};

function three () {
    four();
    console.log("three");
};

function four () {
    console.log("four");
};

setTimeout( one, 500 );