let arr = [47, 1, 32, 128, 45, 62];
//#region Add
// function add(n) {
//     let s = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             s += i * j
//         }
//     }
// }
//#endregion Add

//#region RecursiveCount
// function recursiveCount(max, current) {
//     if (current > max) {
//         return;
//     }
//     console.log(current);
//     recursiveCount(max, current + 1);
// }
// recursiveCount(10, 1);
//#endregion RecursiveCount

//#region Fibonacci
// function fibonacci(n) {
//     if (n <= 2) {
//         return 1;
//     }
//     else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// for (let i = 1; i < 12; i++) {
//     console.log(`i - ${i}, num - ${fibonacci(i)}`);
// }
//#endregion Fibonacci

//#region AddNumbers
// function addNumbers(number) {
//     if (number === 0) return number;
//     else {
//         return number + addNumbers(number - 1);
//     }
// }

// addNumbers(3);
// 3 + addNumbers(2)
// 3 + 2 + addNumbers(1)
// 3 + 2 + 1
//#endregion AddNumbers

//#region TailAddNumbers
// function tailAddNumbers(number, sum = 0) {
//     if (number === 0) return sum;
//     else {
//         return tailAddNumbers(number - 1, sum + number);
//     }
// }

// // console.log(`AddNumbers - ${addNumbers(3)}`);
// console.log(`TailAddNumbers - ${tailAddNumbers(3)}`);
// tailAddNumbers(3)
// tailAddNumbers(3, 0)
// tailAddNumbers(2, 3)
// tailAddNumbers(1, 5)
// tailAddNumbers(0, 6)
//#endregion TailAddNumbers

//#region MergeSort

// function mergeSort(numbers) {
//     if (number.length < 2) {
//         return numbers;
//     }
//     const length = numbers.length;
//     const middle = Math.floor(length / 2);
//     const left = numbers.splice(0, middle);
//     const right = numbers.slice(middle);
//     return mergeSort(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     const sortedArray = [];
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             sortedArray.push(left.shift());
//         }
//         else {
//             sortedArray.push(right.shift());
//         }
//     }
//     return sortedArray.concat(left, right);
// }

//#endregion MergeSort

//#region QuickSort
// function quickSort(numbers) {
//     if (numbers.length <= 1) return numbers;

//     const pivot = numbers[numbers.length - 1];
//     const left = [];
//     const right = [];

//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (numbers[i] < pivot) {
//             left.push(numbers[i]);
//         }
//         else {
//             right.push(numbers[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort(arr));
//#endregion QuickSort

/*
    Table - contacts

    id | first_name | last_name
    1  | John       | Doe
*/

// ModeI
class Contact {
    constructor(name, last) {
        this.name = name;
        this.lastname = last;
    }
}

/*
    SELECT first_name, last_name FROM contacts;
    SELECT * FROM contacts;
*/

/*
    INSERT INTO contacts(first_name, last_name) VALUES('Jane', 'Jane')
*/
/*
    Table - contacts

    id | first_name | last_name
    1  | John       | Doe
    2  | Jane       Jane
*/
