function inBetween(from, to){
    return function(item){
        return (item >= from) && (item <= to);
    }
}

function inArray(arr){
    return function(item){
        return arr.includes(item);
    }
}




let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alert(arr.filter(inBetween(3, 6)));     // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2