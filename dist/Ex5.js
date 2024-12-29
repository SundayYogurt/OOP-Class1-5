"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRate = exports.Visit = exports.Customers = void 0;
class Customers {
    constructor(name) {
        this.member = false;
        this.memberType = "";
        this.name = name;
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    setMember(member) {
        this.member = member;
    }
    getMemberType() {
        return this.memberType;
    }
    setMemberType(memberType) {
        this.memberType = memberType;
    }
    toString() {
        return this.name + "(" + (this.member ? this.memberType : "not member") + ")";
    }
}
exports.Customers = Customers;
class Visit extends Customers {
    constructor(customers, date, serviceExpense, productExpense) {
        super(customers.getName());
        this.customers = customers;
        this.date = date;
        this.serviceExpense = serviceExpense;
        this.productExpense = productExpense;
    }
    getName() {
        return this.customers.getName();
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    setServiceExpense(serviceExpense) {
        this.serviceExpense = serviceExpense;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense(productExpense) {
        this.productExpense = productExpense;
    }
    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }
    toString() {
        return "Name: " + this.getName() + "\n" + "Date: " + this.date + "\n" + "Service Expense: " + this.serviceExpense + "\n" + "Product Expense: " + this.productExpense + "\n" + "Total Expense: " + this.getTotalExpense();
    }
}
exports.Visit = Visit;
class DiscountRate {
    constructor() {
        this.serviceDiscountPremium = 0.2;
        this.serviceDiscountGold = 0.15;
        this.serviceDiscountSilver = 0.1;
        this.productDiscountPremium = 0.1;
        this.productDiscountGold = 0.1;
        this.productDiscountSilver = 0.1;
    }
    getServiceDiscountRate(memberType) {
        if (memberType === "Premium") {
            return this.serviceDiscountPremium;
        }
        else if (memberType === "Gold") {
            return this.serviceDiscountGold;
        }
        else if (memberType === "Silver") {
            return this.serviceDiscountSilver;
        }
        else {
            return 0;
        }
    }
    getProductDiscountRate(memberType) {
        if (memberType === "Premium") {
            return this.productDiscountPremium;
        }
        else if (memberType === "Gold") {
            return this.productDiscountGold;
        }
        else if (memberType === "Silver") {
            return this.productDiscountSilver;
        }
        else {
            return 0;
        }
    }
}
exports.DiscountRate = DiscountRate;
