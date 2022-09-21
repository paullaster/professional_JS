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
 * extends
 */
class Vehicle {
    constructor(name, brand, color, speed, accelerate){
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.speed = speed;
        this.accelerate = accelerate;
    }
    move (speed){
        return this.speed;
    }
    accelerate (amount){
        return this.speed += amount;
    }
};

class Suv extends Vehicle {
    constructor (name, brand, color, speed, accelerate, fuel){
        super (name, brand, color, speed, accelerate);
        this.fuel = fuel;
    }
    getDetails () {
        return {
            name: this.name,
            brand: this.brand,
            color: this.color,
            speed: this.speed + ' km/h',
            acceleration: this.accelerate + ' km/h',
            fuel: this.fuel + ' ltr',
        }
    }
};


let toyotaTx = new Suv ('Toyota TX Prado',
                        'Toyota', 'Grey', 280,
                        40, 400);

console.log (toyotaTx.getDetails());