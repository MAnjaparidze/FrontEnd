// var
// let
// const

// akfbajfbjha
// /ajhvwjhavfwj
// akjhwbfjahbwf
// console.log(test);
// var test = 0;
// console.log(test);

// var x = "outer scope";
// (function(){
//     console.log(x);
//     var x = 'inner scope';
// })()

// if( 1 ){
//     console.log(x);
//     var x = 'inner scope';
// }
// console.log(x);

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.table(myArray)
// for( let i = 0; i < myArray.length; i += 1 ){
//     console.log(`index - ${i}, value - ${ myArray[i] }`);
// }

// myArray.forEach(function(value, index, arr){
//     console.log(`index - ${index}, value - ${ value }`);
// });

// Generator/Generator Functions
// Iterable protocol
// Iterator protocol
// let s = Symbol([]);

// @@iterator
let myObject = {
    prop1: "Hello",
    prop2: "World",
    prop3: "!...",
    // [Symbol.iterator]: () => {
    //     return {
    //         items: 'Hello Iterator'.split(''),
    //         next: function next(){
    //             return {
    //                 done: this.items.length === 0,
    //                 value: this.items.shift()
    //             }
    //         }
    //     }
    // }

    [Symbol.iterator]: function* () {
        for (value of Object.keys(this)) {
            yield value;
        }
    }
}

function* display() {
    yield 1
    yield 2
    yield 3
    yield 8
}

let items = 'Hello Iterator'.split('');
// console.log(myObject)
// for( let letter of myObject ){
//     console.log(letter)
// }

let Display = display();
// for( let number of Display){
//     console.log(number)
// }

function* mul(value) {
    yield value * 1
    yield value * 2
    yield value * 3
    yield value * 4
    yield value * 5
    yield value * 6
    yield value * 7
    yield value * 8
    yield value * 9
}
// let table8 = mul(8);
// for( let n of table8 ){
//     console.log(n)
// }
console.log(...mul(8))
console.log(...mul(7))