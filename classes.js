/**
 * Classes
 */
class Person {
    constructor (fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getName () {
        let name = this.fname + ' ' + this.lname;
        return `Name: ${name}  Age: ${this.age}`;
    };
};

let peter = new Person('Peras','Omondi', 45);
console.log(peter.getName());