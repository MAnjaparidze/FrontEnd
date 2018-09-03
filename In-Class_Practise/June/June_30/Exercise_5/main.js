function subArrayZero(arr){
    let sum = 0;
    let mySet = new Set();

    for( let num of arr ) {
        sum += num;
        if( mySet.has(sum)){
            return true;
        }
    }
    return false;
}

console.log(subArrayZero)