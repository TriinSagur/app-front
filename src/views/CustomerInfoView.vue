<template>

  <div>
<!--    <input placeholder="kliendi andmebaasi ID" v-model="customerId">-->
    <table>
      <tr>
        <th>Eesnimi</th>
        <th>Perekonnanimi</th>
        <th>Isikukood</th>
      </tr>
      <tr v-for="customer in customers">
        <td>{{customer.firstName}}</td>
        <td>{{customer.lastName}}</td>
        <td>{{customer.isikukood}}</td>
      </tr>
    </table>
  </div>


</template>

<script>
export default {

  name: 'CustomerInfo',
  data: function () {
    return {
      customerId: 0,
      customer: {},
      customers:{}
    }
  },
  methods: {

    getAllCustomers: function(){
      this.$http.get('/customer/all')
      .then(response => {
        this.customers = response.data

        console.log(response.data)
          })
          .catch( error => console.log(error))
    },

    findCustomerById: function () {

      this.$http.get('/customer/id', {
        params: {
          id: this.customerId
        }
      }).then(response => {
        this.customer = response.data
        console.log(response.data)


      }).catch( error => console.log(error))
    }


  },
  mounted(){
    this.getAllCustomers()
  }
}

</script>
