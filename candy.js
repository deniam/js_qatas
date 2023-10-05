class Candy {
    constructor(item, price) {
        this.name = item;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}

module.exports = Candy