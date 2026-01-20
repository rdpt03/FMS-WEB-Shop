export class User {
    #id;
    #username;
    #email;
    #password;

    constructor(id, username, email, password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // ===== ID =====
    get id() {
        return this.#id;
    }

    set id(value) {
        if (!Number.isInteger(value) || value <= 0) {
        throw new Error("Invalid ID");
        }
        this.#id = value;
    }

    // ===== USERNAME =====
    get username() {
        return this.#username;
    }

    set username(value) {
        if (!value || value.length < 3) {
        throw new Error("Username must have at least 3 characters");
        }
        this.#username = value;
    }

    // ===== EMAIL =====
    get email() {
        return this.#email;
    }

    set email(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
        throw new Error("Invalid email");
        }
        this.#email = value;
    }

    // ===== PASSWORD =====
    get password() {
        return "********"; // never expose real password
    }

    set password(value) {
        if (!value || value.length < 6) {
        throw new Error("Password must have at least 6 characters");
        }
        this.#password = value;
    }

    // ===== METHODS =====
    checkPassword(password) {
        return this.#password === password;
    }

    toJSON() {
        return {
        id: this.#id,
        username: this.#username,
        email: this.#email,
        password: this.#password
        };
    }
}
