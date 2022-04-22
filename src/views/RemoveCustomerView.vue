<template>
  <div>
    <input type="text" placeholder="Sisesta kliendi ID" v-model:readonly="customerId">
    <br>
    <button v-on:click="removeCustomer">Vajuta siia</button>
  </div>
</template>

<script>
export default {
  name: "RemoveCustomerView",
  data: function () {
    return {
      customerId: 0
    }
  },
  methods: {
    removeCustomer: function() {
      this.$http.delete('/customer/id', {
        params: {
          id: this.customerId
        }
      }).then( response => {
        alert('Success')
      })
    }
  }

}
</script>

<style scoped>

</style>