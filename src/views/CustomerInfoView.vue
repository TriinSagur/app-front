<template>
  <div>
    <button v-on:click="hideTableDiv" type="button" class="btn btn-outline-danger">Peida</button>
    <button v-on:click="showTableDiv" type="button" class="btn btn-outline-success m-3">Näita</button>
    <br>
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
        </tr>
        </thead>

        <tbody>
        <tr v-for="customer in customers">
          <th scope="row">*</th>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.isikukood }}</td>
          <td><button type="button" class="btn btn-outline-dark" v-on:click="navigateToAccountsInfo(customer.id)">Dark</button></td>
        </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>

<script>
export default {
  name: "CustomerInfo",
  data: function () {
    return {
      customerId: 0,
      customer: {},
      customers: {},
      tableDivDisplay: true
    }
  },
  methods: {
    hideTableDiv: function () {
      this.tableDivDisplay = false;
    },
    showTableDiv: function () {
      this.tableDivDisplay = true;
    },

    getAllCustomers: function () {
      this.$http.get('/customer/all')
          .then(response => {
            this.customers = response.data
            console.log(response.data)
          })
          .catch(error => console.log(error))
    },

    findCustomerById: function () {
      this.$http.get('/customer/id', {
        params: {
          id: this.customerId
        }
      })
          .then(response => {
            this.customer = response.data
          })
          .catch(error => console.log(error))

    },
    navigateToAccountsInfo: function (customerId) {
      console.log('see on customerId: ' + customerId)
      this.$router.push({name: 'accountRoute', query:{id:customerId}})
    },

  },
  mounted() {
    this.getAllCustomers()
  }
}
</script>

<style scoped>

</style>