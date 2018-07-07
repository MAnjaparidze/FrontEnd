//#region #1
/*
    // &&, ||, !

    let operation = '+';

    let num1 = 1, num2 = 3;
    // if(operator === '+') {
    //     console.log(`num1 + num2 = ${num1 + num2}`);
    // }

    switch (operation) {
        default:
            console.log("try again.");
        case "+":
            console.log(`num1 + num2 = ${num1 + num2}`);
            break;
        case "-":
            console.log(`num1 - num2 = ${num1 - num2}`);
            break;
    }
*/
//#endregion #1


// #region #2
/*
    function say(message = "hello", personFunc){
        personFunc(message);
    }

    function helloJohn(message){
        console.log(`${message}, My Name is John`)
    }

    function helloMary(message){
        console.log(`${message}, My Name is Mary`)
    }

    // personFunc = helloJohn
    say("I am from Georgia", helloJohn);

    // personFunc = helloMary
    say("I am from USA", helloMary);

    // Practise
    helloMary();
    helloMary("Konichiwaaaaa");
*/
// #endregion #2

//#region #3

let User = {
    name: "Gela",
    age: 13,
    isPupil: true,
    printInfo: function () {
        console.log(`$User.name}, $User.age}, ${User.isPupil}`);
    }
}

function print({ age, name }) {
    console.log(`Age is ${age}, Name is ${name}`);
}

// User.printInfo();
// print(user);

function Person(name, lastname) {
    this.name = name;
    this.lastname = lastname;

    this.print = function () {
        console.log(`${this.name} ${this.lastname}`);
    }
}

// Dry
let john = new Person("John", "Smith");
let emma = new Person("Emma", "Watson");
let jimi = new Person("Jimi", "Hendrix");


// john.print();
// emma.print();
// jimi.print();

//#endregion #3

//#region #4 DOM

window.onload = () => {
    init();
}
function init(){
    func()
    func()
    func()
    func()
}
// fun1
// funcq

document.addEventListener('DOMContentLoaded', (event) => {

})

//#endregion #4 DOM