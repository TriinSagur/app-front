<template>
  <div>

    <div>
      <input type="text" placeholder="Eesnimi" v-model="customer.firstName">
      <br>
      <br>
      <input type="text" placeholder="Perekonnanimi" v-model="customer.lastName">
      <br>
      <br>
      <input type="text" placeholder="Isikukood" v-model="customer.isikukood">
      <br>
      <br>
      <button v-on:click="saveDataToSessionStorage" type="button" class="btn btn-danger">Session storage</button>
      <button v-on:click="saveDataToLocalStorage" type="button" class="btn btn-success m-3">Local storage</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "InputPageView",
  data: function () {
    return {
      customer: {}
    }
  },
  methods: {
    saveDataToSessionStorage: function () {
      sessionStorage.setItem('firstName', this.customer.firstName)
      sessionStorage.setItem('lastName', this.customer.lastName)
      sessionStorage.setItem('isikukood', this.customer.isikukood)
      sessionStorage.setItem('customer', JSON.stringify(this.customer))
    },

    saveDataToLocalStorage: function () {
      localStorage.setItem('firstName', this.customer.firstName)
      localStorage.setItem('lastName', this.customer.lastName)
      localStorage.setItem('isikukood', this.customer.isikukood)
      localStorage.setItem('customer', JSON.stringify(this.customer))
    },
  }
}
</script>

<style scoped>

</style>