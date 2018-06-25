var Car = function(name, color, brand) {
    this.setName = name;
    this.setColor = color;
    this.setBrand = brand;
    console.log("Saving " + this.setName + ", " + "Color - " + this.setColor + ", " + "Brand - " + this.setBrand + "...");

}

var myCar = new Car("Jetta", "Grey", "WV");
var myCar1 = new Car("Mustang", "Red", "Ford");
var myCar2 = new Car("Skyline", "Grey", "Nissan");
var myCar3 = new Car("Veneno", "Yellow", "Lamborghini");