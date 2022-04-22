<template>
<div>

  <h1>Pangatoimingud</h1>
  <h4>vali konto</h4>



  <section>
    <ul class="list-group">
    <h3 class="list-group-item list-group-item-action active">vali konto</h3>

      <li>   <input type="radio" v-model:class="accountNumber" "v-for="account in accounts" v-model="accountId" value="accountNumber" class="list-group-item list-group-item-action"> EE123 </li>

      <li> <input type="radio" v-model="accountId" value="2">EE789 </li>
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
          })
          .catch(error => console.log(error.response.data))
    }
  },
  mounted() {
    this.findAccountsInfoByCustomerId(this.customerId)
  }
}
</script>

<style scoped>

</style>