export class Customer {
  public id: number
  public firstName: string
  public lastName: string
  public isActive: boolean
  public createdAt: string
  public updatedAt: string

  public constructor() {
    this.id = 0
    this.firstName = ''
    this.lastName = ''
    this.isActive = false
    this.createdAt = ''
    this.updatedAt = ''
  }

  public static empty(): Customer {
    return new Customer()
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
