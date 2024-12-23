"use strict";
class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    toString() {
        return `name = ${this.name} ID = ${this.id} discount = ${this.discount * 100}%`;
    }
}
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
    setcustomer(customer) {
        this.customer = customer;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCustomerId() {
        return this.customer.getId();
    }
    getCustomerName() {
        return this.customer.getName();
    }
    getCustomerDiscount() {
        return this.customer.getDiscount();
    }
    getDiscountAfterDiscount() {
        return this.amount * (1 - this.customer.getDiscount());
    }
    toString() {
        return `Invoice ID = ${this.id} customer = ${this.customer.getId()} discount = ${this.customer.getDiscount() * 100}% Amount${this.amount}`;
    }
}
module.exports = { Invoice, Customer };
