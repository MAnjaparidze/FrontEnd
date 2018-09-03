class Product {
    constructor(id, name, price) {
        this._id = id;
        this.name = name;
        if (price > 0) {
            this.price = price;
        }
    }
    get id() {
        return this._id;
    }
    print() {
        console.log(`id: ${this._id} \nname: ${this.name} \nprice: ${this.price}\n\n`);
    }
    static compare(productA, productB) {
        return productA.price - productB.price;
    }
}


class Book extends Product{
    constructor(authors, pubDate) {
        this.authors = authors;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`Name of the author: `);
        console.log
    }



}