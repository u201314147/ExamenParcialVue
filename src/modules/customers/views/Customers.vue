<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Customers</h2>
          <button class="button refresh-button" @click="loadCustomers()">
            <i class="fas fa-sync"></i>
          </button>
          <router-link
            tag="button"
            class="button add-button"
            :to="{ name: 'customer-detail', params: { id: 0 } }"
          >
            <i class="fas fa-plus"></i>
          </router-link>
          <ul>
            <li v-for="customer in customers" :key="customer.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div
                      :key="customer.id"
                      class="name"
                    >{{ customer.firstName }} {{ customer.lastName }}</div>
                  </div>
                </div>
                <footer class="card-footer">
                  <button class="link card-footer-item" @click="askToDelete(customer)">
                    <i class="fas fa-trash"></i>
                    <span>Delete</span>
                  </button>
                  <router-link
                    tag="button"
                    class="link card-footer-item"
                    :to="{ name: 'customer-detail', params: { id: customer.id } }"
                  >
                    <i class="fas fa-check"></i>
                    <span>Select</span>
                  </router-link>
                </footer>
              </div>
            </li>
          </ul>
        </div>
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
    <Modal
      :message="modalMessage"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="deleteCustomer"
    ></Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Customer } from '@/modules/customers/models/Customer'
import Modal from '@/modules/common/components/Modal.vue'
const customers = namespace('customers')

@Component({
  components: {
    Modal,
  },
})
export default class Customers extends Vue {
  private customerToDelete: Customer = Customer.empty()
  private message: string = ''
  private showModal: boolean = false

  @customers.State
  public customers!: Array<Customer>

  @customers.Action
  public deleteCustomerAction!: (id: number) => void

  @customers.Action
  public getCustomersAction!: () => void

  created() {
    this.loadCustomers()
  }

  public loadCustomers(): void {
    this.message = 'getting the customers, please be patient'
    this.getCustomersAction()
    this.message = ''
  }

  public askToDelete(customer: Customer) {
    this.customerToDelete = customer
    this.showModal = true
  }

  public closeModal() {
    this.showModal = false
  }

  public deleteCustomer() {
    this.closeModal()
    if (this.customerToDelete) {
      this.deleteCustomerAction(this.customerToDelete.id)
    }
    this.loadCustomers()
  }

  get modalMessage() {
    const fullName: string = `${this.customerToDelete.firstName} ${this.customerToDelete.lastName}`
    const name = this.customerToDelete && fullName ? fullName : ''
    return `Would you like to delete ${name} ?`
  }
}
</script>
