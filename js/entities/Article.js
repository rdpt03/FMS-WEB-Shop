// article.js
// Class representing an Article/Product in the shop system

import { SubCategory } from "./SubCategory.js";

export class Article {
    #id;
    #name;
    #stock;
    #price;
    #totalOrdered;
    #subCategory;
    #img;

    constructor(id, name, stock, price, subCategory, img, totalOrdered = 0) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.subCategory = subCategory;
        this.img = img;
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

    get img() { return this.#img; }
    set img(value) {
        if (!value || value.length < 1) throw new Error("Image link is required");
        this.#img = value;
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

    get subCategory() { return this.#subCategory; }
    set subCategory(value) {
        if (!value instanceof SubCategory) throw new Error("This must me a SubCategory");
        this.#subCategory = value;
    }

    // ===== Methods =====
    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            stock: this.#stock,
            price: this.#price,
            subCategory : this.#subCategory.id,
            img : this.#img,
            totalOrdered :this.#totalOrdered
            
        }
    }
}
