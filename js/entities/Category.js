// article.js
// Class representing a Category in the shop system
import { SubCategory } from "./SubCategory.js"
export class Category {
    #id;
    #name;
    #subCategories = [];

    // ===== Constructor =====
    constructor(id, name) {
        this.id = id;
        this.name = name;
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

    get subCategories() { return this.#subCategories; }
    set subCategories(value) {
        //check if items are subCategories
        if (!value.every(item => item instanceof SubCategory)) {
            throw new Error("All items must be SubCategory instances");
        }
        this.#subCategories = value;
    }

    // ===== Methods =====
    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
        }
    }
}
