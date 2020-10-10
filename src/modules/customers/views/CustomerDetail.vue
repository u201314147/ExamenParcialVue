<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">{{ title }}</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ customer.fullName }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">Id</label>
              <label class="input" name="id" readonly>{{ customer.id }}</label>
            </div>
            <div class="field">
              <label class="label" for="firstName">First Name</label>
              <input class="input" name="firstName" v-model="customer.firstName" />
            </div>
            <div class="field">
              <label class="label" for="lastName">Last Name</label>
              <input class="input" name="lastName" v-model="customer.lastName" />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <button class="link card-footer-item cancel-button" @click="cancelCustomer()">
            <i class="fas fa-undo"></i>
            <span>Cancel</span>
          </button>
          <button class="link card-footer-item" @click="saveCustomer()">
            <i class="fas fa-save"></i>
            <span>Save</span>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { cloneDeep } from 'lodash'
import { Customer } from '../models/Customer'
const customers = namespace('customers')

@Component({})
export default class CustomerDetail extends Vue {
  private customer: Customer = Customer.empty()
  @Prop({ default: 0 })
  id!: number

  @customers.Action
  public addCustomerAction!: (customer: Customer) => void

  @customers.Action
  public updateCustomerAction!: (customer: Customer) => void

  @customers.Getter
  public getCustomerById!: (id: number) => Customer

  created() {
    if (!this.isAddMode) {
      this.customer = cloneDeep(this.getCustomerById(this.id))
    }
  }

  public cancelCustomer() {
    this.$router.push({ name: 'customers' })
  }

  public async saveCustomer() {
    this.customer.id ? await this.updateCustomerAction(this.customer) : await this.addCustomerAction(this.customer)
    this.$router.push({ name: 'customers' })
  }

  get isAddMode() {
    return !this.id
  }

  get title() {
    return `${this.isAddMode ? 'Add' : 'Edit'} Customer`
  }
}
</script>