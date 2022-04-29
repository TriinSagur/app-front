<template>
  <div>

    <button v-on:click="hideTableDiv" type="button" class="btn btn-danger">Peida</button>

    <button v-on:click="hideTableDiv2" type="button" class="btn btn-success m-5">Naita</button>


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
          <td>
            <input  v-on:input ="horses.push(customer.id)" type="checkbox" name="" id="">
          </td>
          <td><button v-on:click="navigateToAccountsInfo(customer.id)" type="button" class="btn btn-secondary btn-lg">Konto</button></td>
        </tr>
        </tbody>



      </table>

                <td><button v-on:click="saveDataToSessionStorage" type="button" class="btn btn-secondary btn-lg">edasta</button></td>
                <td><button v-on:click="getAllCustomers" type="button" class="btn btn-secondary btn-lg">all</button></td>
                <td><button v-on:click="updCust" type="button" class="btn btn-secondary btn-lg">upd</button></td>

      <br>
      <br>
{{horses}}
      {{horse}}
      {{raceHorses}}

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
      tableDivDisplay: true,
      horses: [],
      horse: {},
      raceHorses: {}
    }
  },
  methods: {

    saveDataToSessionStorage: function (key, value) {

      sessionStorage.setItem('horses', JSON.stringify(this.horses))



    },

    hideTableDiv: function () {
      this.tableDivDisplay = false
    },
    hideTableDiv2: function () {
      this.tableDivDisplay = true
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
      this.$http.get('customer/id', {
        params: {
          id: this.customerId
        }
      }).then(response => {
        this.customer = response.data
        console.log(response.data)
      }).catch(error => console.log(error))
    },
    navigateToAccountsInfo: function (customerId) {
      console.log('see on customer id' + customerId)
      this.$router.push({name: 'accountRoute', query: {id: customerId} })
    },


    updCust: function () {

      let raceHorses = {
        horses: this.horses
      }
            this.$http.post('customer/upd', raceHorses
    ).then(response => {
      alert("Hello")
        this.horse = response.data
        console.log(response.data)
      }).catch(error => console.log(error))
    },

  mounted() {
    this.getAllCustomers()

  }
}
 }

</script>

