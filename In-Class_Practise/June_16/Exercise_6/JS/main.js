let number = Number(prompt("Please enter a number"));
let digit = 0;
let sum  = 0;

while(number > 0) {

    digit = number % 10;
    sum = sum + digit;
    number = number - digit;
    number = number / 10;
} 
alert(sum);
