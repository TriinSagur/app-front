<template>
  <div>


    <button v-on:click="hideTableDiv" type="button" class="btn btn-danger">Peida</button>
    <button v-on:click="displayTableDiv" type="button" class="btn btn-success m-3">Näita</button>
    <br>
    <br>

    <div v-if="tableDivDisplay">

      <table class="table table-hover table-bordered table-striped ">

        <thead>
        <tr class="table-hover table-active">
          <th scope="col">Eesnimi</th>
          <th scope="col">Perekonnanimi</th>
          <th scope="col">Isikukood</th>
          <th scope="col"></th>
        </tr>
        </thead>

        <tbody>
        <tr class="table-hover table-success" v-for="customer in customers">
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.isikukood }}</td>
          <td>
            <button type="button" class="btn btn-secondary" v-on:click="navigateToAccountsInfo(customer.id)">Vali
              konto
            </button>
          </td>
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

    displayTableDiv: function () {
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
    navigateToAccountsInfo: function (customerId) {
      console.log('see on customer id ' + customerId)
      this.$router.push({name: 'accountRoute', query: {id: customerId}})  //liigume teise aknasse netilehel
    }
    ,

    findCustomerById: function () {
      this.$http.get('/customer/id', {params: {id: this.customerId}})
          .then(response => {
            this.customer = response.data
            console.log(response.data)
          })
          .catch(error => console.log(error))
    }
  },
  mounted() {
    this.getAllCustomers()
  }
}
</script>
