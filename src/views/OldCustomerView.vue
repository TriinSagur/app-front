<template>
  <div>
    <h4>Sisesta kliendi ID, et eemaldada konto</h4>
    <br>
    <input type="text" placeholder="Kliendi ID" v-model="customerId">
    <br>
    <br>
    <button type="button" class="btn btn-danger" v-on:click="removeCustomerById">Eemalda klient</button>
    <br>
    <br>


  </div>
</template>

<script>
export default {
  name: "OldCustomerView",
  data: function () {
    return{
      customerId: '',
    }
  },
  methods: {
    removeCustomerById: function () {
      this.$http.delete('/customer/id', { params: {id: this.customerId }})
          .then(response => {
            this.customer = response.data
            alert('Klient ID-ga ' + this.customerId +' eemaldatud')
          })
          .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>