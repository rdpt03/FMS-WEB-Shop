// orderArticle.js
// Class representing the relationship between an Order and an Article

export class OrderArticle {
    #id;
    #quantity;

    constructor(id, quantity) {
        this.id = id;
        this.quantity = quantity;
    }

    get id() { return this.#id; }
    set id(value) {
        if (!Number.isInteger(value) || value <= 0) throw new Error("Invalid ID");
        this.#id = value;
    }

    get quantity() { return this.#quantity; }
    set quantity(value) {
        if (typeof value !== "number" || value <= 0) throw new Error("Quantity must be positive number");
        this.#quantity = value;
    }
}
