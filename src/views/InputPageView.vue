<template>

</template>

<script>
export default {
  name: "InputPageView"
}
</script>

<style scoped>

</style>
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
      <button v-on:click="saveDataToSessionStorage" type="button" class="btn btn-outline-danger">Peida</button>
      <button v-on:click="displayTableDiv" type="button" class="btn btn-outline-success m-3">Näita</button>
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

    }
  }
}
</script>

<style scoped>

</style>