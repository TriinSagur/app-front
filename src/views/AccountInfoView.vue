<template>

  <div>
    <AccountInfoTable :accounts="accounts"/>

  </div>

</template>

<script>
import AccountInfoTable from "@/components/AccountInfoTable";

export default {
  name: 'AccountInfoView',
  components: {AccountInfoTable},
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
    }
  },
  mounted() {
    this.findAccountsInfoByCustomerId(this.customerId)
  }
}
</script>

