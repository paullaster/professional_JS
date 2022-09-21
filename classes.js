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
    get favColor() {
        return this.#favColor;
    }
    get firstname() { return this.#fname }
    /**
     * @param {any} color
     */
    set favoriteColor (color) {
        this.#favColor = color;
    }
    laughs(fname) {
        return fname +  " Laughs loudly and soft";
    }
};

let peter = new Person('Peras','Omondi', 45);
console.log(peter.name);
peter.favoriteColor = 'red';
console.log(peter.laughs(peter.firstname));
console.log(peter.favColor);


/**
 * Inheritance
 */
