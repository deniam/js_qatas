class ShoppingBasket {
    constructor() {
        this.candies = [];
    }

    addItem(candy) {
        this.candies.push(candy);
    }

    getTotalPrice() {
        return this.candies.reduce((total, candy) => total + candy.getPrice(), 0);
    }
}

module.exports = ShoppingBasket;