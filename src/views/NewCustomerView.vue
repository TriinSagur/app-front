<template>
  <div>

    <input type="text" placeholder="Eesnimi" v-model:placeholder="customer.firstName">
    <br>
    <input type="text" placeholder="Perenimi" v-model:placeholder="customer.lastName">
    <br>
    <input type="text" placeholder="isikukood" v-model:placeholder="customer.isikukood">
    <br>
    <button type="submit" v-on:click="addNewCustomer">lisa uus klient</button>
  </div>
</template>

<script>
export default {
  name: 'NewCustomerView',
  data: function () {
    return {
      customer: {

      }
    }
  },
  methods: {
    addNewCustomer: function ()
      this.$http.post('/customer', this.customer)
          .then(response => {
            this.customer.id = response.data.id
            alert('Klient lisatud. ID: ' + this.customer.id)
          })
          .catch(error => {
            alert(error.response.data)
            console.log(error.response)
          })
    }
  }
}
</script>

<style scoped>

</style>