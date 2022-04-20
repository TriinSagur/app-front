<template>
  <div>
    <!--  <input v-model="firstName">-->
    <input placeholder="kliendi andmebaasi ID" v-model="customerId">
    <!--  <input v-model="greetMessage">-->
    <br>
    <br>
    eesnimi: {{ customer.firstName }} <br>
    perenimi: {{ customer.lastName }} <br>
    isikukood: {{ customer.isikukood }} <br>
    <br>



    <button v-on:click="findCustomerById">Leia customer ID järgi</button>
  </div>

</template>

<script>
export default {
  name: "CustomerInfo",
  data: function () {
    return {
      customerId: 0,
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
        console.log(response.data)
      }).catch(error => console.log(error))

    }
  }

}
</script>


<style scoped>

</style>