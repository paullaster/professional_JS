/**
 * FUNCTIONS
 */

const nameDescriptions = [
    'Beautiful',
    'Perfect',
    'Humble',
    'Samptous',
    'Natural',
    'Industrious',
    'Dependable',
    'Elegant',
    'Amazing'
];

const randomDescriptions = Math.floor(Math.random() * nameDescriptions.length);
//console.log(nameDescriptions[randomDescriptions]);
let username = prompt('Enter your name: ');
function nameDescriptor (name) {
    let desc = nameDescriptions[randomDescriptions];
    console.log(`Hey! ${name}, you're such a ${desc} person!`);
}
nameDescriptor(username);