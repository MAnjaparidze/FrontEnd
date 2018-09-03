//#region #1
// first-class citizen
// local scope, block scope => lexical scope|Environment
/*
    {
        // block scope
    }

    function a() {
        // local scope
    }
*/

// outer Environment
let text = "My text";

function tell(name){
    // inner Environment
    console.log(`${text}, ${name}`);
}
//
// inner -> outer
// outer -> null

tell("Gella");

function saySomething(firstname, lastname){

    function getFullName(){
        return `${firstname} ${lastname}`;
    }

    console.log(`Hello, ${ getFullName()}`);
    console.log(`Ciao, ${ getFullName()}`);
}
saySomething("Gela", "Gelashvili");

//#endregion #1

//#region #2

function counter(){
    let count = 0;

    return function(){
        return (count+=1);
    }

    // default - return undefined
}

let myCounter = counter();

// console.log(counter()());
// [[Environment]]
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());

{
    let message = "Hello from block scope!";
    console.log(message);
}
// console.log(message);

//#endregion #2

//#region #3

// IIFE

(function(){
    let message = "Hello from local scope!";
    console.log(message);
})();



//#endregion #3


//#region #4

let animal = {
    eats: true
}

let dog = {
    barks: true
}

dog.walk = function(){
    console.log("Dog run dog run");
}

dog.__proto__ = animal;
let Lekvi = {
    age: 1,
    __proto__:dog
}

console.log(dog.eats);
console.log(dog.barks);

//#endregion #4





