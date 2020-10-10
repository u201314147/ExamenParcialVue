<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Accounts</h2>
          <button class="button refresh-button" @click="loadAccounts()">
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
import { LockAccount } from '@/modules/accounts/models/LockAccount'
import Modal from '@/modules/common/components/Modal.vue'
const accounts = namespace('accounts')

@Component({
  components: {
    Modal,
  },
})
export default class Accounts extends Vue {
 // private customerToDelete: Account = Account.empty()
  private message: string = ''
  private showModal: boolean = false

  @accounts.State
  public accounts!: Array<Accounts>

  //@accounts.Action
  //public deleteCustomerAction!: (id: number) => void

  @accounts.Action
  public getAccountsAction!: () => void

  created() {
    this.loadAccounts()
  }

  public loadAccounts(): void {
    this.message = 'getting the accounts, please be patient'
    this.getAccountsAction()
    this.message = ''
  }

//  public askToDelete(customer: Customer) {
 //   this.customerToDelete = customer
  //  this.showModal = true
 // }

 /* public closeModal() {
    this.showModal = false
  }*/

 /* public deleteCustomer() {
    this.closeModal()
    if (this.customerToDelete) {
      this.deleteCustomerAction(this.customerToDelete.id)
    }
    this.loadCustomers()
  }*/

/*  get modalMessage() {
    const fullName: string = `${this.customerToDelete.firstName} ${this.customerToDelete.lastName}`
    const name = this.customerToDelete && fullName ? fullName : ''
    return `Would you like to delete ${name} ?`
  }*/
}
</script>
