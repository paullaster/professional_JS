/**
 * Wroking date and built-in date methods
 */
let now = new Date();
//console.log (now);

//Method to get and set elements date
//console.log ( now.getDay(), now.getSeconds(), now.getMilliseconds(), now.getHours(), now.getMinutes());

//now.setHours (19);
//console.log (now);

//parse date
let d = Date.parse( 'Wed Sep 28 2022');
//console.log (d);

//Converting date to string
let d4 =  new Date ();
console.log(d4.toDateString());
console.log (d4.toLocaleDateString());