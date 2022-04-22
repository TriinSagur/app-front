<template>
  <div>
    <button v-on:click="displayTableDiv" type="button" class="btn btn-success">Näida</button>
    <button v-on:click="hideTableDiv"  type="button" class="btn btn-danger">Peida</button>
    <br>
    <div v-if="tableDivDisplay">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Eesnimi</th>
          <th scope="col">Perekonnanimi</th>
          <th scope="col">Isikukood</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer in customers">
          <th scope="row">{{ customer.id }}</th>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.isikukood }}</td>
          <td><button type="button" class="btn btn-outline-dark" v-on:click="navigateToAccountsInfo(customer.id)">Vaata kontosid</button></td>
          <td><button type="button" class="btn btn-dark" v-on:click="navigateToAccountsInfo(customer.id)">Muuda</button></td>
        </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "AllCustomersView",
  data: function () {
    return {
      customer: {},
      customers: {},
      tableDivDisplay: true
    }

  },
  methods: {
    displayTableDiv: function () {
      this.tableDivDisplay = true
    },

    hideTableDiv: function () {
      this.tableDivDisplay = false
    },
    getAllCustomers: function () {
      this.$http.get('/customer/all')
          .then(response => {
            this.customers = response.data
            console.log(response.data)
          })
          .catch(error => console.log(error))
    },
    navigateToAccountsInfo: function (customerId) {
      console.log('see on customer id' + customerId)
      this.$router.push({name:'accountRoute', query: {id: customerId}})
    }

  },

  mounted() {
    this.getAllCustomers()
  }

}
</script>

<style scoped>

</style>