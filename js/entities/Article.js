// article.js
// Class representing an Article/Product in the shop system

export class Article {
    #id;
    #name;
    #stock;
    #price;
    #totalOrdered;

    constructor(id, name, stock, price, totalOrdered = 0) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.totalOrdered = totalOrdered;
    }

    get id() { return this.#id; }
    set id(value) {
        if (!Number.isInteger(value) || value <= 0) throw new Error("Invalid ID");
        this.#id = value;
    }

    get name() { return this.#name; }
    set name(value) {
        if (!value || value.length < 1) throw new Error("Name is required");
        this.#name = value;
    }

    get stock() { return this.#stock; }
    set stock(value) {
        if (!Number.isInteger(value) || value < 0) throw new Error("Stock must be non-negative integer");
        this.#stock = value;
    }

    get price() { return this.#price; }
    set price(value) {
        if (typeof value !== "number" || value < 0) throw new Error("Price must be non-negative number");
        this.#price = value;
    }

    get totalOrdered() { return this.#totalOrdered; }
    set totalOrdered(value) {
        if (typeof value !== "number" || value < 0) throw new Error("Total ordered must be non-negative number");
        this.#totalOrdered = value;
    }

    // ===== Methods =====
    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            stock: this.#stock,
            price: this.#price,
            totalOrdered :this.#price
            // password intentionally omitted
        }
    }
}
