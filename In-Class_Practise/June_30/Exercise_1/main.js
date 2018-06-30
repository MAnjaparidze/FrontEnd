let john = { name: "John", age: 25 };
let adam = { name: "Adam", age: 30 };
let mary = { name: "Mary", age: 30 };

let arr = [john, adam, mary];

function sortByName(arr) {
    arr.sort((a, b) => a.name > b.name);
}


sortByName(arr);
alert(arr[1].name);

