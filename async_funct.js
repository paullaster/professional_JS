/**
 * Timer functions
 */

function one () {
    three();
    console.log("one");
    two();
};

function two () {
    console.log("two");
};

function three () {
    four();
    console.log("three");
};

function four () {
    console.log("four");
};

setTimeout(one, 1000 );