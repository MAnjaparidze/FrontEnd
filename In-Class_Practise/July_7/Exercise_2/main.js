// #region setInterval()

function printNumbers(from, to) {
    let start = from;
    let counter = setInterval(function () {
        alert(start);
        if (start == to) {
            clearInterval(counter);
        }
        start++;
    }, 1000);
}
printNumbers(7, 21);

// #endregion setInterval()

// #region setTimeout()

// function printNumbers(from, to) {
//     let start = from;
//     setTimeout(function counter() {
//         alert(start);
//         if (start < to) {
//             setTimeout(counter, 1000);
//         }
//         start++;
//     }, 1000);
// }
// printNumbers(2, 7);

//#endregion setTimeout()
