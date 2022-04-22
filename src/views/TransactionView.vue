<template>

  <div>
    <h1>Pangatoimingud</h1>
    <br>


    <section>
      <h3>Vali konto</h3>

    <ul class="list-group">
      <li class="list-group-item" v-for="account in accounts"> <input type="radio" v-model="accountId" :value="account.accountId">{{ account.accountNumber}} EUR {{account.balance}}</li>

    </ul>

    <br />
    <span>choosen account ID: {{ accountId }}</span>
    </section>



  </div>
</template>

<script>

import AccountInfoTable from "@/components/AccountInfoTable";

export default {
  name: "TransactionInfoView",
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
    },
  },
  mounted() {
    this.findAccountsInfoByCustomerId(1);
  }
}
</script>

<style scoped>

</style>