<template>
  <div>
    <h1>Pangatoimingud</h1>
    <h4>Vali konto</h4>

    <section>
      <ul class = "list-group">
        <li class ="list-group-item"><input type="radio" v-model="color" value="0">EE123</li>
        <li class ="list-group-item"><input type="radio" v-model="color" value="1">EE234</li>
      </ul>
      <br/>
      <span >value: {{ color }}</span>
    </section>

  </div>
</template>

<script>
import AccountInfoTable from "@/components/AccountInfoTable";

export default {
  name: "TransactionView",
  components: {AccountInfoTable},
  data: function () {
    return {
      accounts: {},
      customerId: this.$route.query.id,
      picked: null,
      color: null
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
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

<style scoped>

</style>