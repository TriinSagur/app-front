<template>
  <div>
    <h1>Pangatoimingud</h1>
    <div>

      <section>
        <h3>vali konto</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="account in accounts">
            <input type="radio" v-model="accountId" :value="account.accountId">{{ account.accountNumber }}
            €{{ account.balance }}
          </li>
        </ul>
      </section>


      <button v-on:click="getStatementByAccountId" type="button" class="btn btn-outline-success m-3">
        Kuva kontoväljavõtet
      </button>

      <button v-on:click="startNewPayment" type="button" class="btn btn-outline-success m-3">
        Alusta ülekannet
      </button>
      <br>
      <br>

      <div>
        <h4>{{ firstName }} {{ lastName }}</h4>


        <select v-model="selectedAccountId">
          <option v-for="account in accounts" :value="account.accountId">{{ account.accountNumber }}</option>
        </select>

      </div>


      <!--      {-->
      <!--      "senderAccountNumber": "string",-->
      <!--      "receiverAccountNumber": "string",-->
      <!--      "amount": 1-->
      <!--      }-->

      <StatementTable :initial-click="initialClick" :statements="statements"/>


    </div>


  </div>
</template>

<script>
import StatementTable from "@/components/StatementTable";
import AccountSelectionRadio from "@/components/AccountSelectionRadio";

export default {
  name: 'TransactionView',
  components: {AccountSelectionRadio, StatementTable},

  data: function () {
    return {
      accounts: {},
      firstName: 'Otto',
      lastName: 'Triin',
      selectedAccountId: null,
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
      console.log('selectedAccountId= ' + this.selectedAccountId)
      console.log('this.accountId= ' + this.accountId)
      this.selectedAccountId = this.accountId
    }
  },

  mounted() {
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

