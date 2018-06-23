function Calculator() {
    this.read = function() {
        let num1 = Number(prompt("Enter first value: "));
        this.n1 = num1;
        let num2 = Number(prompt("Enter second value: "));
        this.n2 = num2;
    },
    this.sum = function() {
        return this.n1 + this.n2;
    },
    this.mul = function() {
        return this.n1 * this.n2;
    }
};

let calculator = new Calculator();
calculator.read();

alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());