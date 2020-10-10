export class Account {
  public id: number;
  public number: string;
  public balance: number;
  public isLocked: boolean;
  public customerId: number;
  public createdAt: string;
  public updatedAt: string;


  public constructor() {
    this.id = 0
    this.number = ''
    this.balance = 0
    this.isLocked = false
    this.customerId = 0
    this.createdAt = ''
    this.updatedAt = ''
  }

  public static empty(): Account {
    return new Account()
  }

/*  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }*/
}
