let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach( (element, index, arr) => {
//     console.log(`value - ${element}, index = ${index}, array - [${arr}]`);
// });

let newArr = arr.map((element, index, arr) => {
    return `<div>${element * 2}</div>`;
})

// console.log(arr);
// document.body.innerHTML = newArr.toString().split(',').join(' ');
// console.log(newArr.toString().split(','));

let filtered = arr.filter((element) => {
    return element & 1;
});
// 0 0 0 0 0 0 0 0

// 2 2 2 2 2 2 2 2
// 7 6 5 4 3 2 1 0

// 5 => 0 0 0 0 0 0 0 1

// console.log(filtered);

// for(let entry of arr.entries()){
//     console.log(entry);
// }
// console.log(arr.entries());

// for(let value of arr.values()){
//     console.log(value);
// }
// console.log(arr.values());

for(let key of arr.keys()){
    console.log(key)
}
// console.log(arr.keys());

// Object.entries()
// console.log(Math.max(5, 8))

function allSum(x, y, ...numbers) {
    console.log(numbers);
    // console.log(arguments);
}
// allSum(1,2,3,4,5,6);

// console.log(Math.max(...[1,2,3,4,5,6]));
// let merge = [100,113,...[1,2,3,4,5,6], ...arr, 65];
// let str = "Georgia";
// console.log([...str]);

let elementNode = document.createElement('strong');
let elementText = document.createTextNode('Georgia');

let containerDiv = document.querySelector('#container');
let p = containerDiv.querySelector('#para');

p.appendChild(elementNode);
elementNode.appendChild(elementText);

console.log(document.body.innerHTML);

// insertBefore(elementNode, element)

// generateHTML(count, tagName, selector, content, childCount, child);
// generateHTML(1, ul, '#container ul', "text content");

// let params = {
//     count,
//     tagName,
//     parentSelector,
//     content,
//     childCount,
//     childElement
// }
// generateHTML(params)