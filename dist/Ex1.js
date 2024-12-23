"use strict";
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return "Authors name:" + this.name + ", Email:" + this.email;
    }
}
class Book {
    constructor(name, authors, price, qty = 0) {
        this.qty = 0;
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        let details = `Book [name = ${this.name}, Author name = ${this.authors[0]}`;
        for (let i = 0; i < this.authors.length; i++) {
            details += this.authors[i].toString() + "],";
        }
        details += "}, price =" + this.price + ", qty=" + this.qty;
        return details;
    }
    getAithorNames() {
        let authorNames = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorNames += this.authors[i].getName() + ",";
        }
        return authorNames;
    }
}
module.exports = { Author, Book };
