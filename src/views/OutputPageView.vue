<template>
  <div>
    {{customer.firstName}}
  </div>
</template>

<script>
export default {
  name: "OutputPageView",
  data: function (){
    return{
      customerName: sessionStorage.getItem('firstName'),
      customer: JSON.parse(sessionStorage.getItem('customer'))
    }
  },

}
</script>

<style scoped>

</style>