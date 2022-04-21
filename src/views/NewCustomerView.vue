<template>
  <div>

    <input type="text" placeholder="Eesnimi" v-model="firstName">
    <br>
    <br>
    <input type="text" placeholder="Perekonnanimi" v-model="lastName">
    <br>
    <br>
    <input type="text" placeholder="Isikukood" v-model="isikukood">
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
      id: 0,
      firstName: '',
      lastName: '',
      isikukood: '',
    }
  },
  methods: {
    addNewCustomer: function () {

      let customer = {
        firstName: this.firstName,
        lastName: this.lastName,
        isikukood: this.isikukood,
      }
      this.$http.post('/customer', customer)
          .then(response => {
            this.id = response.data.id
            alert('Klient lisatud. ID: ' + this.id)
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