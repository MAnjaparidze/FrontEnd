let arr = ["I", "<3", "Javascript"];
// let removed = arr.splice(1,1);
let removed = arr.slice(1, 2);
// console.log(arr, removed);

let nums = [2, 4, 9, 5, 7, 13, 24, 1];

let users = [
    { id: 1, name: "Gela" },
    { id: 2, name: "Kabu" },
    { id: 3, name: "Jimsheri" },
    { id: 4, name: "Ani" },
    { id: 4, name: "Koba" }
]


function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

// console.log(nums.sort((a,b) => {return a - b; }));

let foundUser = users.find(user => user.id == 2);
console.log(foundUser);
let filtered = users.filter(user => user.id < 4);
console.log(filtered);

let doubled = nums.map((number, index, arr) => {
    return number * 2;
});

// console.table(doubled);

let html = users.map(user => {
    return
        <div>
            <h2 class="title"> ${user.name} <small>Id - ${user.id}</small></h2>
        </div>
    ;
})

document.body.innerHTML = html.join(" ");
// console.table(html);

function* generator(){
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}


// Array.from(), ...var, for value of items
let g = generator();

// console.log(typeof g[symbol.iterator] === 'function');

// console.log(typeof g.next() === 'function');

// console.log(g[Symbol.iterator]() === g);
// console.log([...g]);
// console.log(Array.from(g));


// for ( let char of g){
//     // console.log(char);
// }

let rangeCount = {
    start: 1,
    end: 13
}
rangeCount[Symbol.iterator] = function(){
    return {
        current: this.start,
        last: this.end,

        next(){
            if( this.current < this.last ){
                return {
                    done: false,
                    value: this.current++
                }
            }
            else {
                return { done: true }
            }
        }
    }
}

for( let num of rangeCount){
    
}



