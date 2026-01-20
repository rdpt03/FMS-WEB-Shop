// order.js
// Class representing an Order in the shop system

export class Order {
    #id;
    #orderDate;
    #confirmed;
    #confirmedDate;

    constructor(id, orderDate, confirmed = false, confirmedDate = null) {
        this.id = id;
        this.orderDate = orderDate;
        this.confirmed = confirmed;
        this.confirmedDate = confirmedDate;
    }

    // ===== GETTERS SETTERS =====
    get id() { return this.#id; }
    set id(value) {
        if (!Number.isInteger(value) || value <= 0) throw new Error("Invalid ID");
        this.#id = value;
    }

    get orderDate() { return this.#orderDate; }
    set orderDate(value) {
        if (!(value instanceof Date)) throw new Error("Order date must be a Date object");
        this.#orderDate = value;
    }

    get confirmed() { return this.#confirmed; }
    set confirmed(value) {
        if (typeof value !== "boolean") throw new Error("Confirmed must be boolean");
        this.#confirmed = value;
    }

    get confirmedDate() { return this.#confirmedDate; }
    set confirmedDate(value) {
        if (value !== null && !(value instanceof Date)) throw new Error("Confirmed date must be a Date or null");
        this.#confirmedDate = value;
    }

    // ===== Methods =====
    toJSON() {
        return {
            id: this.#id,
            orderDate: this.#orderDate,
            confirmed: this.#confirmed,
            confirmedDate: this.confirmedDate
        }
    }

    // Optional method to confirm the order
    confirmOrder() {
        this.#confirmed = true;
        this.#confirmedDate = new Date();
    }
}
