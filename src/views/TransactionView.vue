<template>
  <div>
    <h1>Pangatoimingud</h1>

    <div>

      <div class="d-inline-flex p-2">
      <section>
        <h3>vali konto</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="account in accounts">
            <input type="radio" v-model="accountId" :value="account.accountId">{{ account.accountNumber }}
            {{ '€' + account.balance }}
          </li>
        </ul>
      </section>
        <br>
        <br>
      </div>
      <br>

      <button v-on:click="getStatementByAccountId" type="button" class="btn btn-success m-3">Kuva kontoväljavõte</button>
      <button v-on:click="startNewPayment" type="button" class="btn btn-success m-3">Alusta ülekannet</button>

      <div>
        <h5>{{firstName}} {{lastName}}</h5>

        <select v-model="accountId">
          <option v-for="account in accounts" :value="account.accountId">{{account.accountNumber}}</option>
        </select>
      </div>

      <StatementTable :initial-click="initialClick" :statements="statements"/>

    </div>


  </div>
</template>

<script>
import StatementTable from "@/components/StatementTable";

export default {
  name: 'TransactionView',
  components: {StatementTable},
  data: function () {
    return {
      accounts: {},
      customerId: this.$route.query.id,
      accountId: null,
      statements: {},
      initialClick: false,
      firstName: 'Otto',
      lastName: 'Triin',
      selectedAccountId: null,
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
      this.$http.get("/statement/accountId", {
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
      console.log('selectedAccountId = ' + selectedAccountId)


    }
  },

  mounted() {
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

