<template>

  <div class="customer">
    <input placeholder="nimi" v-model="firstName"></input>
    <br>
    Tere maailm
    <br>
    <br>
    <button v-on:click="findCustomerById">Leia customer ID-ga 1</button>
    <br>
    <br>
    {{greetMessage}}
  </div>

</template>

<script>
export default {
  name: "CustomerInfo",
  data: function () {
    return {
      firstName: "",
      greetMessage: ""
    }
  },
  methods: {
    findCustomerById: function () {

      this.$http.get('/customer/id', {
        params: {
          id: 1
        }
      }).then(response => {
        console.log(response)
      }).catch( error => console.log(error))

    }
  }
}
</script>

<style scoped>

</style>