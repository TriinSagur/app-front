<template>
  <div>
    <input type="text" placeholder="Kliendi" v-model="customerId">
    <br>
    <br>
    <input type="text" placeholder="Eesnimi" v-model="customer.firstName">
    <br>
    <br>
    <input type="text" placeholder="Perekonnanimi" v-model="customer.lastName">
    <br>
    <br>
    <input type="text" placeholder="Isikukood" v-model="customer.isikukood">
    <br>
    <br>
    <button type="submit" v-on:click="updateCustomer">Uuenda kliendi andmed</button>
  </div>
</template>

<script>
export default {
  name: "UpdateCustomerView",
  data: function () {
    return {

      customer: {
      },
      customerId: {}
    }
  },
  methods: {
    updateCustomer: function () {
      this.$http.put('/customer/id',this.customer, {
        params: {
          id: this.customerId
        }
      })

          .catch(error => {

            alert(error)
      } )

          },
    }
  }
</script>

<style scoped>

</style>