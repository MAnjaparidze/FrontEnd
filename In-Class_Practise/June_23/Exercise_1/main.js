let product = new Object();
product.name = "Laptop";
product.price = 1200;
product.price = 1000;
console.log(product.name, product.price);
delete product.name;
console.log(product.name, product.price);