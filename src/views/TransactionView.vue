<template>
  <div>
    <h1>Pangatoimingud</h1>
    <h4>Vali konto</h4>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
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
      picked: null
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
  mounted() {
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

<style scoped>

</style>