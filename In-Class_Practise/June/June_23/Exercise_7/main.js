function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function() {
        let num = Number(prompt("Please enter a number: "));
        this.value += num;
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);