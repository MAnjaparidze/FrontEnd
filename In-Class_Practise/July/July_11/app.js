let animal = {
    eats: true
}

function Dog(name){
    this.name = name;
}

// let jeka1 = new Dog("Black Jeka");

Dog.prototype = animal;
let jeka = new Dog("White Jeka");
// console.log(jeka.eats)
// jeka.eats = "Yep"
// console.log(jeka.eats)
// __proto__ -> Parent
// prototype -> Cloned Value

jeka.eats = "Yep"
jeka.__proto__.eats = "Yep";

// console.log(jeka.constructor === Dog)

// Object

// let obj = {};
// console.log(obj.toString === obj.__proto__.toString)

// 1
let newObject = {}
// 2
let newObject1 = Object.create( Object.prototype );
// 3
let newObject2 = new Object();

// 1
newObject.someKey = "Hello World";
// console.log(newObject.someKey)

// 2
newObject1['someKey'] = "Hello World";
// console.log(newObject['someKey'])

// 3
Object.defineProperty( newObject2, 'someKey', {
    value: "Hello World",
    writable: true,
    configurable: true,
    enumerable: true
});
// console.log(newObject2.someKey)


function defineProp(obj, key, value, 
    writable = true, 
    configurable = true, 
    enumerable = true){
    let config = {
        value,
        writable,
        configurable,
        enumerable,
    }
    Object.defineProperty(obj, key, config);
}


let person = Object.create( Object.prototype );

defineProp(person, 'car', 'supercar');
defineProp(person, 'dateOfBirth', '1970');
defineProp(person, 'hasBeard', true);

Object.defineProperties(person, {
    'key': {
        value:"key value",
        writable: true,
    },
    'key2': {
        value:'key2 value',
        writable: true,
    }
})

// console.log(person)

let driver = Object.create( person );

defineProp(driver, 'topSpeed', '170mph');

// console.log(driver.dateOfBirth)

function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;

    // this.toString = function(){
    //     return `${this.model} has done ${this.miles} miles`;
    // }
}

Car.prototype.toString = function(){
    return `${this.model} has done ${this.miles} miles`;
}

let civic = new Car('Honda Civic', 2017, 24564);
let prius = new Car('Toyota Prius', 2017, 64);

// console.log(driver.toString())
// console.log(civic.toString())
// console.log(prius.toString())

/*
to(generator, limit)

let d = to(fun, 5);

d() -> 1, 
d()->4
d()->15
d()->17
d()->100

d()-> undefined
d()-> undefined
d()-> undefined
d()-> undefined

*/

function genNum(){
    return Math.floor( Math.random() * 100 )  + 1;
}
function to(generator, limit){
    let current = 0;
    return function(){
        if( current < limit){
            current += 1;
            return generator();
        }
        return undefined;
    }
}
let steps = to(genNum, 3);
console.log(steps())
console.log(steps())
console.log(steps())
console.log(steps())
console.log(steps())