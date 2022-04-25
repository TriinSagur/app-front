<template>
  <div>
    <h1>Pangatoimingud</h1>
    <div>

      <AccountSelectionRadio :account-id="accountId" :accounts="accounts"/>

      <button v-on:click="getStatementByAccountId" type="button" class="btn btn-outline-success m-3">
        Kuva kontoväljavõte
      </button>

      <button v-on:click="startNewPayment" type="button" class="btn btn-outline-success m-3">
        Alusta ülekannet
      </button>

      <div>
        <h4>{{ firstName }} {{lastName}}</h4>

        <select v-model="selectedAccountId">
          <option v-for="account in accounts" :value="account.accountId">{{ account.accountNumber }}</option>
        </select>
      </div>


      <Statement :initial-click="initialClick" :statements="statements"/>

    </div>
  </div>
</template>

<script>
import Statement from "@/components/Statement";
import AccountSelectionRadio from "@/components/AccountSelectionRadio";

export default {
  name: 'TransactionView',
  components: {AccountSelectionRadio, Statement},

  data: function () {
    return {
      firstName: 'Otto',
      lastName: 'Triin',
      selectedAccountId: null,
      accounts: {},
      customerId: this.$route.query.id,
      accountId: null,
      statements: {},
      initialClick: false
    }
  },

  methods: {
    findAccountsInfoByCustomerId: function (id) {
      this.$http.get('/account/customer-id', {
        params: {
          id: id
        }
      })
          .then(response => {
            this.accounts = response.data
            this.accountId = this.accounts[0].accountId
            this.selectedAccountId = this.accountId
          })
          .catch(error => console.log(error.response.data))
    },
    getStatementByAccountId: function () {
      this.$http.get("/statement/account-id", {
            params: {
              accountId: this.accountId
            }
          }
      ).then(response => {
        this.initialClick = true
        this.statements = response.data.statements
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    startNewPayment: function () {

    }
  },

  mounted() {
    this.findAccountsInfoByCustomerId(1)

  }
}
</script>

