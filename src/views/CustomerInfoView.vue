<template>
  <div>

    <input placeholder="nimi"  v-model="firstName">
    <br>
    <br>

    <button v-on:click="findCustomerById">Leia customer ID'ga 1</button>

    <br>
    <br>
    {{ greetMessage }}

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
    findCustomerById: function(){

      this.$http.get('/customer/id',{
        params: {
          id:1
        }
      }) .then(response => {
        console.log(response.data)
      }).catch(error=> console.log(error))
    }



  }
}

</script>

<style scoped>

</style>