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
    #favColor;
    constructor (fname, lname, age, favcolor) {
        this.#fname = fname;
        this.#lname = lname;
        this.#age = age;
        this.#favColor = favcolor;
    }
    get name () {
        let name = this.#fname + ' ' + this.#lname;
        return `Name: ${name}  Age: ${this.#age}`;
    };
    
    /**
     * @param {any} color
     */
    set favoriteColor (color) {
        this.#favColor = color;
    }
};

let peter = new Person('Peras','Omondi', 45);
console.log(peter.name);
peter.favoriteColor = '#f00';

//console.log(peter.getName());