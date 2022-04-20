<template>
  <div>

    <input placeholder="Sisesta kliendi ID" v-model="customerId" type="text">
    <br>
    <button v-on:click="findCustomerById"> Leia klient ID järgi.</button>
    <br>
    <br>
    Eesnimi: {{customer.firstName}}
    <br>
    Perekonnanimi: {{customer.lastName}}
    <br>
    Isikukood: {{customer.isikukood}}


  </div>
</template>

<script>
export default {
  name: "CustomerInfo",
  data:function(){
    return{
      customerId: null,
      customer:{

      }
    }
  },
  methods:{
    findCustomerById: function(){
      this.$http.get("/customer/id",{
        params:{
          id:this.customerId
        }
      }).then(response => {
        this.customer = response.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>