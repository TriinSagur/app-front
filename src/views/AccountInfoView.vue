<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'AccountInfoView',
  data: function () {
    return {
      accounts: {}
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