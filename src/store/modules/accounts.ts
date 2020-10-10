import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as accountApi from '@/modules/accounts/api/AccountApi'
import { StatusCodes } from 'http-status-codes'
import { AxiosResponse } from 'axios'
import { Account } from '@/modules/accounts/models/Account'

@Module({ namespaced: true })
class Accounts extends VuexModule {
  public accounts: Array<Accounts> = []

  /*@Action
  public async addCustomerAction(customer: Customer): Promise<void> {
    const apiResponse: AxiosResponse = await customerApi.addCustomer(customer)
    if (apiResponse.status !== StatusCodes.CREATED) {
      return
    }
    const addedCustomer = apiResponse.data
    this.context.commit('addCustomer', addedCustomer)
  }*/
/*
  @Mutation
  public addCustomer(customer: Customer): void {
    this.customers.push(customer)
  }
*/
  @Action
  public async updateAccountActionLock(account: Account): Promise<void> {
    const apiResponse = await accountApi.lockAccount(account)
    if (apiResponse.status !== StatusCodes.OK) {
      return
    }
    const updatedCustomer = apiResponse.data
    this.context.commit('updateCustomer', updatedCustomer)
  }

  @Mutation
  public updateCustomer(account: Account): void {
    const index = this.accounts.findIndex((h) => h.id === account.id)
    this.accounts.splice(index, 1, account)
    this.accounts = [...this.accounts]
  }

  /*@Action
  public async deleteCustomerAction(id: number): Promise<void> {
    const apiResponse = await customerApi.deleteCustomer(id)
    if (apiResponse.status !== StatusCodes.OK) {
      return
    }
    this.context.commit('deleteCustomer', id)
  }
*/
  /*@Mutation
  public deleteCustomer(customerId: number): void {
    this.customers = [...this.customers.filter((p) => p.id !== customerId)]
  }*/

  @Action
  public async getAccountsAction(): Promise<void> {
    const apiResponse = await accountApi.getAccounts()
    if (apiResponse.status !== StatusCodes.OK) {
      return
    }
    const accounts = apiResponse.data
    this.context.commit('getAccounts', accounts)
  }

  @Mutation
  public getAccounts(accounts: Array<Account>): void {
    this.accounts = accounts
  }

  get getAccountById(): Account {
    const account = (id: number) => this.accounts.find((h) => h.id === id)
    return account === null || account === undefined ? Account.empty() : ((account as unknown) as Account)
  }
}
export default Accounts
