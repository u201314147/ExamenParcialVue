import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as customerApi from '@/modules/customers/api/CustomerApi'
import { StatusCodes } from 'http-status-codes'
import { AxiosResponse } from 'axios'
import { Customer } from '@/modules/customers/models/Customer'

@Module({ namespaced: true })
class Customers extends VuexModule {
  public customers: Array<Customer> = []

  @Action
  public async addCustomerAction(customer: Customer): Promise<void> {
    const apiResponse: AxiosResponse = await customerApi.addCustomer(customer)
    if (apiResponse.status !== StatusCodes.CREATED) {
      return
    }
    const addedCustomer = apiResponse.data
    this.context.commit('addCustomer', addedCustomer)
  }

  @Mutation
  public addCustomer(customer: Customer): void {
    this.customers.push(customer)
  }

  @Action
  public async updateCustomerAction(customer: Customer): Promise<void> {
    const apiResponse = await customerApi.updateCustomer(customer)
    if (apiResponse.status !== StatusCodes.OK) {
      return
    }
    const updatedCustomer = apiResponse.data
    this.context.commit('updateCustomer', updatedCustomer)
  }

  @Mutation
  public updateCustomer(customer: Customer): void {
    const index = this.customers.findIndex((h) => h.id === customer.id)
    this.customers.splice(index, 1, customer)
    this.customers = [...this.customers]
  }

  @Action
  public async deleteCustomerAction(id: number): Promise<void> {
    const apiResponse = await customerApi.deleteCustomer(id)
    if (apiResponse.status !== StatusCodes.OK) {
      return
    }
    this.context.commit('deleteCustomer', id)
  }

  @Mutation
  public deleteCustomer(customerId: number): void {
    this.customers = [...this.customers.filter((p) => p.id !== customerId)]
  }

  @Action
  public async getCustomersAction(): Promise<void> {
    const apiResponse = await customerApi.getCustomers()
    if (apiResponse.status !== StatusCodes.OK) {
      return
    }
    const customers = apiResponse.data
    this.context.commit('getCustomers', customers)
  }

  @Mutation
  public getCustomers(customers: Array<Customer>): void {
    this.customers = customers
  }

  get getCustomerById(): Customer {
    const customer = (id: number) => this.customers.find((h) => h.id === id)
    return customer === null || customer === undefined ? Customer.empty() : ((customer as unknown) as Customer)
  }
}
export default Customers
