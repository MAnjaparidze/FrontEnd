let calculator = {
    sum: 0,
    mul: 0,
    read() {
        let num1 = Number(prompt("Enter first value: "));
        this.n1 = num1;
        let num2 = Number(prompt("Enter second value: "));
        this.n2 = num2;
    },
    sum() {
        return this.n1 + this.n2;
    },
    mul() {
        return this.n1 * this.n2;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());