// article.js
// Class representing a SubCategory in the shop system

export class SubCategory {
  #id;
  #name;

  constructor(id, name) {
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
}
