let arr = [];
let mixedStr = ["John", "Harry", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];

// let uniqueStr = mixedStr.filter( (value, index) => {
//     return mixedStr.indexOf(value) == index;
// });
// console.table(uniqueStr);

let tmp = [];
for( item of mixedStr ){
    if(! tmp.includes(item)) {
        tmp.push(item);
    }
}
console.table(tmp);

// function unique(arr) {
//     var seen = {};
//     return arr.filter(function(item) {
//         return seen.hasOwnProperty(item) ? false : (seen[item] = true);
//     });
// }


alert(unique(values)); //John, Harry, Mary, Beth