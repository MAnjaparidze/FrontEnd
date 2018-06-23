function Calculator() {

    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            operator = split[1],
            b = +split[2]

        if (!methods[operator] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[operator](a,b);
    }
    this.addMethod = function (name, func) {
        methods[name] = func;
    };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);

// let result = powerCalc.calculate("2 / 2");
// alert(result);

// let result = powerCalc.calculate("2 * 5");
// alert(result);