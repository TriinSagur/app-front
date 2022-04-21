<template>
  <div>

    <input type="text" placeholder="Eesnimi" v-model="customer.firstName">
    <br>
    <br>
    <input type="text" placeholder="Perekonnanimi" v-model="customer.lastName">
    <br>
    <br>
    <input type="text" placeholder="Isikukood" v-model="customer.isikukood">
    <br>
    <br>
    <button type="submit" v-on:click="addNewCustomer">Lisa uus klient</button>
  </div>

</template>

<script>
export default {
  name: 'NewCustomerView',
  data: function () {
    return {
      customer: {}
    }
  },
  methods: {
    addNewCustomer: function () {

      this.$http.post('/customer', this.customer)
          .then(response => {
            this.customer.id = response.data.id
            alert('Klient lisatud. ID: ' + this.customer.id)
          })
          .catch(error => {
            alert(error.response.data.detail)
            console.log(error.response.data)
          })
    }
  }
}
</script>

<style scoped>

</style>