<template>

  <div>
    <input placeholder="kliendi andmebaasi ID" v-model="customerId">
    <br>
    <br>


    <button v-on:click="findCustomerById">Leia customer ID järgi</button>
    <br>
    <br>
   eesnimi: {{customer.firstName}}
    <br>
    perekonnanimi: {{customer.lastName}}
    <br>
    isikukood: {{customer.isikukood}}
    <br>
    <br>
    <br>

  </div>

</template>

<script>
export default {

  name: 'CustomerInfo',
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


      }).catch( error => console.log(error))
    },


  },

}

</script>
