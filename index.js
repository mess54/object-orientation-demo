let person = {
    firstName: "Jess",
    lastName: "Menna",
    age: 25
};

// How do we access values in an object?
// Dot notation
// console.log(person.firstName);

// Bracket notation - subscripting
// console.log(person["firstName"]);

let meal = {
    appetizer: "Mozzarella Sticks",
    entree: "Fettucine Alfredo",
    dessert: "Lemon Cake",
    drink: "Cab Sav"
};

//Destructure
// const {appetizer, entree, dessert} = meal;
// console.log(appetizer);
// console.log(entree);
// console.log(dessert);

// Destructure and rename the variable
let {drink: beverage} = meal;
// console.log(beverage);

beverage = "water";
// console.log(beverage)

// For in loop
for(let key in person) {
    // console.log(person[key]);
};

// Adding properties
person.job = "Student";
person["pets"] = ["Dog", "Cat"];

// console.log(person);

// Deleting properties
let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  };

delete teams.teamFour;
// console.log(teams);

// Lets talk about classes
// Classes are like mini factories
class Car {
    constructor(make, model, year, horsepower, name) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.horsepower = horsepower;
        this.name = name;
        this.isFast = false;
    };
    turbocharge() {
        this.isFast = true;
        console.log(`Is my car fast? ${this.isFast}`);
    };
};

let darla = new Car("Oldsmobile", "Cutlass Ciera", "1985", 112, "Darla")
darla.turbocharge();
// console.log(darla);

