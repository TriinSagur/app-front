<template>
  <div>

    <input type="text" placeholder="eesnimi" v-model="customer.firstName" style="margin: 10px">
    <input type="text" placeholder="perekonnanimi" v-model="customer.lastName" style="margin: 10px">
    <input type="text" placeholder="isikukood" v-model="customer.isikukood" style="margin: 10px">
    <button type="submit" class="btn btn-success" v-on:click="saveDataToSessionStorage" style="margin: 10px">Session storage</button>
    <button type="submit" class="btn btn-danger" v-on:click="saveDataToLocalStorage" style="margin: 10px">Local storage</button>


  </div>
</template>

<script>
export default {
  name: "InputPageView",
  data: function () {
    return{
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
    }
  }
}
</script>

<style scoped>

</style>