<template>
  <div>

    <input type="text" placeholder="eesnimi" v-model="customer.firstName" style="margin: 10px">
    <input type="text" placeholder="perekonnanimi" v-model="customer.lastName" style="margin: 10px">
    <input type="text" placeholder="isikukood" v-model="customer.isikukood" style="margin: 10px">
    <button type="submit" v-on:click="addNewCustomer" style="margin: 10px">Lisa uus klient</button>


  </div>
</template>

<script>
export default {
  name: 'NewCustomerView',
  data: function () {
    return {
    customer:{}
    }
  },
  methods: {

    addNewCustomer: function () {
      this.$http.post('/customer', this.customer)
          .then(response => {
            this.customer.id = response.data.id
            alert('klient lisatud. ID: ' + this.customer.id)
          })
          .catch(error => {
            alert(error.response.data.detail)
          })
    }
  }
}
</script>

<style scoped>

</style>