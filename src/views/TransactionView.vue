<template>
  <div>
    <h1>Pangatoimingud</h1>

    <section>
      <h3>vali konto</h3>
      <ul class="list-group">
        <li v-on:click="" class="list-group-item" v-for="account in accounts"><input type="radio" v-model="accountId" :value= "account.accountId" >{{account.accountNumber}}  {{account.balance}}</li>

      </ul>

      <br />
      <span>value: {{ accountId }}</span>
    </section>


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
  }, methods: {
    findAccountsInfoByCustomerId: function (id) {

      this.$http.get('/account/customer-id', {
        params: {
          id: id
        }
      })
          .then(response => {
            this.accounts = response.data
          })
          .catch(error => console.log(error.response.data))
    }
  },
  getStatementByByAccountId: function (){
    this.$http.get("/statement/account-id"),{
      params: {
        accountId:1
      }
    }
  }

  mounted() {
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

<style scoped>

</style>