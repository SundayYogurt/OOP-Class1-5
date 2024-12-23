const {Author, Book} = require('./Ex1');

console.log("################# EX1 ################")

const authors1 = new Author("Kritsana Piwgram","664259002@webmail.npru.ac.th")
const authors2 = new Author("Phongsakorn Thnagpok","6642590011@webmail.npru.ac.th")

console.log(authors1.toString())

const book1 = new Book("Basic To make Program like Best Practices",[authors1,authors2], 500, 100)

console.log(book1.toString())
console.log("################# EX1 ################")

const {Customer,Invoice} = require('./Ex2')


const customer1 = new Customer(1, "Top", 0.5)
const Invoice1 = new Invoice(1,customer1, 1000)
console.log("")
console.log("################# EX2 ################")
console.log(Invoice1.getDiscountAfterDiscount())
console.log(Invoice1.toString())
console.log("################# EX2 ################")