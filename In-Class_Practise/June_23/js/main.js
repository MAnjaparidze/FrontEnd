// let user = new Object();
// let user_2 = {};

// // JSON {} 
// let user = {
//     name: "John",
//     age: 33
// }

// user_2.name = "user 2";
// user_2.age = 30;
// /*
//     {}
//     {           {
//         name,       name,
//         age         age
//     }           }

// #region 1
// */

// /* 
//     value
//     writable : true,
//     enumarable : true,
//     configurable : true
// */
// user.isAdmin = true;

// Object.defineProperty(user, "lastname", {
//     value: 'Doe',
//     writable: false,
//     configurable: false,
//     enumerable: false
// })

// Object.defineProperties(user_2, {
//     name: { value : "Test", writable: false},
//     lastname: {value : "lastname", writable: false },
// })

// console.log(user.lastname);
// user.lastname = 'Smith';
// console.log(user.lastname);
// delete user.lastname;
// console.log(user.lastname);
// // console.log(user.name, user['age']);
// // delete user.age;
// // console.log(user.name, user['age']);
// // console.log(user)
// // let key = prompt("Enter key:", 'name');

// // alert(user[key]);

// let speed = 300;
// let color = "black";
// let year = 2018;


// // this
// let car = {
//     speed,
//     color,
//     year,
//     engine: 6.3,
//     beep: function(){
//         alert("PI PI PI");
//     }
// }

// let car_2 = car;

// Object.defineProperty(car, 'speed', {
//     value: speed,
//     enumerable: false,
// })

// console.log(car_2 == car);

// const myConst = {
//     name: "const"
// }
// myConst.new = 'new';
// // console.log(myConst);
// // myConst = {
// //     name: 'const',
// //     new: 'new',
// // }

// let clone = Object.assign({}, user);
// console.log(user, clone)
// // console.log(car);
// // console.log('engine' in car);

// // for (let key in car){
// //     console.log(`key: ${key}, value: ${car[key]}`)
// // }


// user.sayHi = function() {
//     // alert("Hello");
//     alert(this.name)
// }
// // car.beep();
// // user.sayHi();
// // user['sayHi']();

// function blaBlaBla(){
//     alert(this);
// }
// blaBlaBla()

// let userV2 = {
//     name: "javascript",
//     sayHi(){
//         let func = () => alert(this,name);
//         func()
//     }
//     // test: () => {
//     //     alert(this.name)
//     // }
// }

// // userV2.sayHi();
// // userV2.test();

// function greet(){
//     alert(this.name);
// }

// function say(time, phrase){
//     alert(`[${time}] ${this.name}: ${phrase}`);
// }


// // call, apply
// let client = { name: 'client'}
// let admin = { name: 'admint'}
// let john = {name: 'John'}
// let empty = {};

// greet.call(empty)
// greet.call(client)  // this = client
// greet.call(admin)   // this = admin
// say.call(john, '10:00', 'Hello');   // this = jogn

// let message = ['10:00', 'Hello'];

// say.apply(john, message);

// #endregion 1

let id = Symbol('id');
let id1 = Symbol('id');

console.log(id === id1);
john[id] = "ID Value";

console.log(john[id]);

// console.log(john);

for( let key in john ) {
    console.log(key)
}
let customer = {
    name: 'Super',
    // [id]: 140  'id' => 140
}

// console.log(customer[id])

function User(name){
    // this => {}
    this.name = name;
    this.isAdmin = false;

    this.hello = function(){
        alert(`My Name is : ${this.name}`)
    }

}

let conUser = new User("new User");
console.log(conUser)
conUser.hello();