<template>
  <div>
    <h1>Pangatoimingud</h1>
    <div>

      <!--  ACCOUNTS RADIO button    -->
      <AccountSelectionRadio :account-id="accountId" :accounts="accounts"/>

      <button v-on:click="getStatementByAccountId" type="button" class="btn btn-outline-success m-3">Kuva
        kontoväljavõtet
      </button>

      <button v-on:click="getStatementByAccountId" type="button" class="btn btn-outline-success m-3">
        Alusta ülekannet
      </button>


      <!--  STATEMENTS TABEL    -->
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
    }
  },

  mounted() {
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

