const {Author, Book} = require('./Ex1');

console.log("################# EX1 ################")

const authors1 = new Author("Kritsana Piwgram","664259002@webmail.npru.ac.th")
const authors2 = new Author("Phongsakorn Thnagpok","6642590011@webmail.npru.ac.th")

console.log(authors1.toString())

const book1 = new Book("Basic To make Program like Best Practices",[authors1,authors2], 500, 100)

console.log(book1.toString())
console.log("################# EX1 ################")