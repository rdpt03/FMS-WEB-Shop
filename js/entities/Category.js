// article.js
// Class representing a Category in the shop system

export class Category {
    #id;
    #name;

    // ===== Constructor =====
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.totalOrdered = totalOrdered;
    }

    // ==== Getters Setters
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

    // ===== Methods =====
    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
        }
    }
}
