class Customer {
  private id: number;
  private name: string;
  private discount: number;

  constructor(id: number, name: string, discount: number) {
    this.id = id;
    this.name = name;
    this.discount = discount;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDiscount(): number {
    return this.discount;
  }

  public setDiscount(discount: number): void {
    this.discount = discount;
  }

  public toString(): string {
    return `name = ${this.name} ID = ${this.id} discount = ${
      this.discount * 100
    }%`;
  }
}

class Invoice {
  private id: number;
  private customer: Customer;
  private amount: number;

  constructor(id: number, customer: Customer, amount: number) {
    this.id = id;
    this.customer = customer;
    this.amount = amount;
  }

  public getId(): number {
    return this.id;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public setcustomer(customer: Customer): void {
    this.customer = customer;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public getCustomerId(): number {
    return this.customer.getId();
  }

  public getCustomerName(): string {
    return this.customer.getName();
  }

  public getCustomerDiscount(): number {
    return this.customer.getDiscount();
  }

  public getDiscountAfterDiscount(): number {
    return this.amount * (1 - this.customer.getDiscount());
  }

  public toString(): string {
    return `Invoice ID = ${
      this.id
    }, customer = ${this.customer.getName()}, ID = ${this.customer.getId()}, discount = ${
      this.customer.getDiscount() * 100
    }% Amount${this.amount}`;
  }
}

export = { Invoice, Customer };
