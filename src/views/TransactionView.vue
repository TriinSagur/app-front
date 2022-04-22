<template>
  <div>
    <h1>Pangatoimingud</h1>
    <div>
      <section>
        <h3>vali konto</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="account in accounts">
            <input v-on:click="getStatementByAccountId" type="radio" v-model="accountId" :value="account.accountId">{{ account.accountNumber }}
            €{{ account.balance }}
          </li>
        </ul>
      </section>



    </div>


  </div>
</template>

<script>
import AccountInfoTable from "@/components/AccountInfoTable";

export default {
  name: 'TransactionView',
  components: {AccountInfoTable},
  data: function () {
    return {
      accounts: {},
      customerId: this.$route.query.id,
      accountId: null
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

<style scoped>

</style>