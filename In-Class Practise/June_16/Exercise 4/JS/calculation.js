function calculation() {
    let operation = prompt("Please enter an operation which you want to perform +,-,*,/");
    if (operation === '+' || operation === '-' || operation === '*' || operation === '/') {
        let number2 = Number(prompt("Please enter Second number"));

        switch (operation) {
            case '+':
                alert(number1 + " + " + number2 + " = " + (number1 + number2));
                calculator();
                break;

            case '-':
                alert(number1 + " - " + number2 + " = " + (number1 - number2));
                calculator();
                break;

            case '*':
                alert(number1 + " * " + number2 + " = " + (number1 * number2));
                calculator();
                break;
                
            case '/':
                alert(number1 + " / " + number2 + " = " + (number1 / number2));
                calculator();
                break;
        }
    }
    else {
        alert("Please enter proper operation");
        calculation();
    }
}