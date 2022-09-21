/**
 * Classes
 * properties(fields): Hold data for a class
 * # - make the class properties private and 
 * not accessible from outside classes
 */
class Person {
    #fname;
    #lname;
    #age;
    constructor (fname, lname, age) {
        this.#fname = fname;
        this.#lname = lname;
        this.#age = age;
    }
    get name () {
        let name = this.#fname + ' ' + this.#lname;
        return `Name: ${name}  Age: ${this.#age}`;
    };
};

let peter = new Person('Peras','Omondi', 45);
console.log(peter.name);
//console.log(peter.getName());