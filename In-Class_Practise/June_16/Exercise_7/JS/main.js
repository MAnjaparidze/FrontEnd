let number1 = Number(prompt("Please enter first number"));
let number2 = Number(prompt("Please enter second number"));
let numBetween;
if (number1 > number2) {
    for (i = number2; i <= number1; i++) {
        if (i % 2 == 0) {
            alert(i);
        }
    }
}
else {
    for (i = number1; i <= number2; i++) {
        if (i % 2 == 0) {
            alert(i);
        }
    }
}