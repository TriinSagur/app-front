<template>
  <div>
    <input placeholder="Kliendi Id" v-model="customerId">
    <br>

    <button v-on:click="findCustomerById">Leia customer ID'ga 1</button>
    <br>
    <br>
    Eesnimi: {{customer.firstName}}
    <br>
    Perekonnanimi: {{customer.lastName}}
    <br>
    Isikukood: {{customer.isikukood}}
  </div>
</template>

<script>
export default {
  name: "CustomerInfo",
  data: function () {
    return {
      customerId : 0,
      customer: {}
    }
  },
  methods: {
    findCustomerById: function () {
      this.$http.get('/customer/id', {
        params: {
          id: this.customerId
        }
      }).then(response => {
        this.customer = response.data
      }).catch(error => console.log(error))

    }
  }
}
</script>

<style scoped>

</style>