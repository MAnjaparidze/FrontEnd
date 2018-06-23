let nums = [];

function sumInput() {
    let n;
    let sum = 0;
    do{
        n = Number(prompt("Please Enter a Number: "));
        numbers.push(n);
    }while(!(isNan(n)) && n!=null && n!="")
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
let sum = sumInput();
console.log(`sum: ${sum}`);