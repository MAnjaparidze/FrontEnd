var Car = function(name, color, brand) {   //შევქმენი კონსტრუქტორი პარამეტრებით სახელი ფერი და ბრენდი
    this.setName = name;                    //ანიჭებს მეთოდს .setName სახელს
    this.setColor = color;                  //ანიჭებს მეთოდს .setColor ფერს
    this.setBrand = brand;                  //ანიჭებს მეთოდს .setBrand ბრენდს
    this.save();
    console.log("Saving " + this.setName + ", " + "Color - " + this.setColor + ", " + "Brand - " + this.setBrand + "...");

}

var myCar = new Car("Jetta", "Grey", "WV");
var myCar1 = new Car("Mustang", "Red", "Ford");
var myCar2 = new Car("Skyline", "Grey", "Nissan");
var myCar3 = new Car("Veneno", "Yellow", "Lamborghini");