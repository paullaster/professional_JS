/**
 * Classes
 */
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    getName () { return `name: ${this.name} age: ${this.age}` ; }
};

let peter = new Person('Peras', 45);
console.log(peter.getName());