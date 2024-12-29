class Customers {
    private name: string;
    private member: boolean = false;
    private memberType:string = "";

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public isMember(): boolean {
        return this.member;
    }

    public setMember(member:boolean): void {
        this.member = member;
    }

    public getMemberType():string{
        return this.memberType;
    }

    public setMemberType(memberType:string):void{
        this.memberType = memberType;
    }

    public toString(): string {
        return this.name + "(" + (this.member ? this.memberType : "not member") + ")";
    }
}

class Visit extends Customers {
    private customers: Customers;
    private date: Date;
    private serviceExpense: number;
    private productExpense: number;

    constructor(customers: Customers, date: Date, serviceExpense: number, productExpense: number) {
        super(customers.getName());
        this.customers = customers;
        this.date = date;
        this.serviceExpense = serviceExpense;
        this.productExpense = productExpense;
    }

    public getName():string {
        return this.customers.getName()
    }

    public getServiceExpense(): number {
        return this.serviceExpense;
    }

    public setServiceExpense(serviceExpense: number): void {
        this.serviceExpense = serviceExpense;
    }

    public getProductExpense(): number {
        return this.productExpense;
    }

    public setProductExpense(productExpense: number): void {
        this.productExpense = productExpense;
    }

    public getTotalExpense(): number {
        return this.serviceExpense + this.productExpense;
    }

    public toString(): string {
        return "Name: " + this.getName() + "\n" + "Date: " + this.date + "\n" + "Service Expense: " + this.serviceExpense + "\n" + "Product Expense: " + this.productExpense + "\n" + "Total Expense: " + this.getTotalExpense();
    }
}

class DiscountRate {
    private serviceDiscountPremium: number = 0.2;
    private serviceDiscountGold: number = 0.15;
    private serviceDiscountSilver: number = 0.1;
    private productDiscountPremium: number = 0.1;
    private productDiscountGold: number = 0.1;
    private productDiscountSilver: number = 0.1;

    public getServiceDiscountRate(memberType: string): number {
        if (memberType === "Premium") {
            return this.serviceDiscountPremium;
        } else if (memberType === "Gold") {
            return this.serviceDiscountGold;
        } else if (memberType === "Silver") {
            return this.serviceDiscountSilver;
        } else {
            return 0;
        }
    }

    public getProductDiscountRate(memberType: string): number {
        if (memberType === "Premium") {
            return this.productDiscountPremium;
        } else if (memberType === "Gold") {
            return this.productDiscountGold;
        } else if (memberType === "Silver") {
            return this.productDiscountSilver;
        } else {
            return 0;
        }
    }
}

export {Customers, Visit, DiscountRate};