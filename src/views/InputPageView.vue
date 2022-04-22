<template>
  <div>
    <div>

      <input type="text" placeholder="Eesnimi" v-model:placeholder="customer.firstName">
      <br>
      <input type="text" placeholder="Perenimi" v-model:placeholder="customer.lastName">
      <br>
      <input type="text" placeholder="isikukood" v-model:placeholder="customer.isikukood">
      <br>
      <button type="submit" v-on:click="addNewCustomer">lisa uus klient</button>
      <button v-on:click="saveDataToSessionStorage" type="button" class="btn btn-outline-danger m-3">session storage</button>
      <button type="button" class="btn btn-outline-success m-3">local storage</button>

    </div>

  </div>
</template>

<script>
export default {
  name: "InputPageView"
  data: function () {
    return {
      customer: {}
    }
  },
  methods: {
    saveDataToSessionStorage: function () {
      sessionStorage.setItem('firstName', this.customer.firstName)
      sessionStorage.setItem('lastname', this.customer.lastName)
      sessionStorage.setItem('isikukood', this.customer.isikukood)
      sessionStorage.setItem('customer', JSON.stringify(this.customer))
    },

    saveDataToLocalStorage: function () {
      localStorage.setItem('firstName', this.customer.firstName)
      localStorage.setItem('lastname', this.customer.lastName)
      localStorage.setItem('isikukood', this.customer.isikukood)
      localStorage.setItem('customer', JSON.stringify(this.customer))
    }
  }
}
</script>

<style scoped>

</style>