<template>

  <div>
<!--    {{ customerName }}-->
    {{ customer.firstName }}
    {{horses}}
    {{horses1}}


  </div>
</template>

<script>
export default {
  name: "OutputPageView",

  data: function () {
    return {
      customerName: sessionStorage.getItem('firstName'),
      horses: sessionStorage.getItem('horses'),
      customer: JSON.parse(sessionStorage.getItem('customer')),
      horses1: JSON.parse(sessionStorage.getItem('horses')),
    }
  },

}
</script>

<style scoped>

</style>