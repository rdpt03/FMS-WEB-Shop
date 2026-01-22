// article.js
// Class representing a SubCategory in the shop system

import { Category } from "./Category.js";

export class SubCategory {
    #id;
    #name;
    #category;

    // ===== Constructor =====
    constructor(id, name, category) {
        this.#id = id;
        this.#name = name;
        this.#category = category
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

    get category() { return this.#category; }
    set category(value) {
        if (!(value instanceof Category)) throw new Error("you must give a category");
        this.#name = value;
    }

    // ===== Methods =====
    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            category: this.#category.id,
        }
    }
}
