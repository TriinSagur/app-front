<template>

  <div>

    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Kontonumber</th>
        <th scope="col">Kontojaak</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="account in accounts">
        <td>{{account.accountNumber}}</td>
        <td>{{account.balance}}</td>

      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "AccountInfoView",

  data: function () {
    return {
      accounts: {},
      customerId: this.$route.query.id
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
    this.findAccountsInfoByCustomerId(this.customerId);
  }
}

</script>


<style scoped>

</style>