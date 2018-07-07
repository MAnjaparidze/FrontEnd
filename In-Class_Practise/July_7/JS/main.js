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

/*    
    window.onload = () => {

    }
*/


document.addEventListener('DOMContentLoaded', (event) => {
    let h1 = document.getElementsByTagName('h1')[0];
    console.log(h1);
    h1.innerHTML = "Hello from JS";
    h1.style.color = "red";
    h1.style.padding = "10px";
    h1.style.backgroundColor = "#eee";
    h1.style.textAlign = "center";

    h1.addEventListener('click', (event) => {
        setTimeout(greet, 3000);
    })
})

//#endregion #4 DOM

// #region #5 set-Timeout


function greet(){
    alert("SetTimeout()");
}

// setTimeout(() => alert("Arrow Function"), 1000);

// let timerId = setTimeout(say, 200, "I am from Georgia", helloJohn);
// console.log(timerId);
// clearTimeout(timerId);

// let intervalId = setInterval(() => {
//     alert("setInterval")
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     alert("Stop Interval");
// }, 5000);

setTimeout(() => alert("World"), 0);

alert("Hello");
// #endregion #5 set-Timeout

//#region #6

function count2(){
    do {
        i++;
    }
    while(i % 1e6 != 0);
    if( i == 2e9 ){
        alert(`Done ${Date.now() - start} ms`);
    }
    else {
        setTimeout(count2, 0);
    }
}

count2();
s();

//#endregion #6

