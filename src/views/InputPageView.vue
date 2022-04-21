<template>
<div>


</div>
</template>

<script>
export default {
  name: "InputPageView",
  data:function () {
    return {
      customer: {}
    }
  },
  methods: {
    saveDataToSessionStorage: function (){
      sessionStorage.setItem('firstName', this.customer.firstname)
      sessionStorage.setItem('firstName', this.customer.firstname)

    }
  }
}
</script>


<style scoped>

</style>