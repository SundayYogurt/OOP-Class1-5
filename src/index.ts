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

const {Person,Student,Staff} = require('./Ex3')


const student1 = new Student("Top","Nakhon Pathom","Software Engineer",2023,11500);
const staff1 = new Staff("Boom","Rajburi","Rajbhat NakornPhatom University",25000)
console.log("################# EX3 ################")
console.log(student1.toString())
console.log(staff1.toString())
console.log("################# EX3 ################")

const {Shape,Circle,Rectangle} = require('./Ex4')

const circle1 = new Circle(2.0);
const rectangle1 = new Rectangle(2.0,3.0);
const Square1 = new Rectangle(2.0,2.0,"yellow",true);

console.log("################# EX4 ################")
console.log(circle1.toString())
console.log(rectangle1.toString())
console.log(Square1.toString());
console.log("################# EX4 ################")


const {DiscountRate, Customers, Visit} = require('./Ex5');

// สร้าง instance ของ Customer
const customers1 = new Customers("Krit");
customers1.setMember(true);
customers1.setMemberType("Gold");

// สร้าง instance ของ Visit
const visit1 = new Visit(customers1, new Date());
visit1.setServiceExpense(100);
visit1.setProductExpense(50);

console.log("################# EX5 ################");
console.log(customers1.toString());
console.log(`Customer Name: ${customers1.getName()}`);
console.log(`Is Member: ${customers1.isMember()}`);
console.log(`Member Type: ${customers1.getMemberType()}`);

console.log(visit1.toString());
console.log(`Service Expense: ${visit1.getServiceExpense()}`);
console.log(`Product Expense: ${visit1.getProductExpense()}`);
console.log(`Total Expense: ${visit1.getTotalExpense()}`);