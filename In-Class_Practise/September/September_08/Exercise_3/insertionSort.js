let arr = [3,2,6,1,4];
function insertionSort(numbers){
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] < numbers[j]){
                let temp = numbers.splice(i,1);
                numbers.splice(j,0,temp[0]);
            }
        }
    }
}

insertionSort(arr);
console.log(arr);