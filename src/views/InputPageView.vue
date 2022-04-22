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
      <button v-on:click="saveDataToSessionStoage" type="button" class="btn btn-outline-danger">Session storage</button>
      <button v-on:click="saveDataToLocalStoage" type="button" class="btn btn-outline-success m-3">Local storage</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "InputPageView",
  data:function () {
   return{
     customer:{}
   }
  },

  methods:{
    saveDataToSessionStoage: function () {
      sessionStorage.setItem('firstName', this.customer.firstName)
      sessionStorage.setItem('lastname', this.customer.lastName)
      sessionStorage.setItem('isikukood', this.customer.isikukood)
      sessionStorage.setItem('customer', JSON.stringify(this.customer))

    },
    saveDataToLocalStoage: function () {
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