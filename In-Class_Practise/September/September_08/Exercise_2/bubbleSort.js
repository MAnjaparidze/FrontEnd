let arr = [47, 1, 32, 128, 45, 62];
function bubbleSort(numbers) {

    do {
        var isSorting = false;
        for (let i = 0; i < numbers.length; i++) {
            if( numbers[i] > numbers[i+1]){
                let t = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = t;
                // [numbers[i],numbers[i+1]] = [numbers[i+1],numbers[i]]
                isSorting = true;
            }
        }
    }
    while (isSorting);

}

// console.log(sortedArr);
bubbleSort(arr);
console.log(arr);

