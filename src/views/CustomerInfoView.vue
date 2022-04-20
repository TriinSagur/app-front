<template>
  <div>
    <input placeholder="kliendi andmebaasi ID" v-model="customerId">

    <br>
    <br>

    <button v-on:click="findCustomerById">Leia customer ID järgi</button>

    <br>
    <br>

    {{ customer }}

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
      }).catch(error => console.log(error))
    }


    // greeting: function () {
    //   this.greetMessage = "Tere "
    // },
    // greetingWithName: function (firstname) {
    //   console.log("Me oleme siin")
    //   this.greeting()
    //   this.firstname = firstname
    //   this.greetMessage += this.firstname
    // }
  }
}
</script>

<style scoped>

</style>