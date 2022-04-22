<template>
  <div>
    <h1>Pangatoimingud</h1>

    <div>
      <!--ACCOUNTS NUPUD-->
      <section>
        <h3>Vali konto:</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="account in accounts">
            <input type="radio" v-model="accountId"
                   :value="account.accountId">{{ account.accountNumber }}
            €{{ account.balance }}
          </li>
        </ul>
      </section>


      <button v-on:click="getStatementByAccountId" type="button" class="btn btn-outline-success m-3">Kuva väljavõte
      </button>


      <!--STATEMENTS TABEL-->
      <div v-if="statements.length > 0 && initialClick">
        <table>
          <tr>
            <th>Saatja</th>
            <th>Saaja</th>
            <th>Summa</th>
            <th>Jääk</th>
            <th>Aeg</th>
          </tr>
          <tr v-for="statement in statements">
            <td>{{ statement.senderAccountNumber }}</td>
            <td>{{ statement.receiverAccountNumber }}</td>
            <td>{{ statement.amount }}</td>
            <td>{{ statement.balance }}</td>
            <td>{{ statement.transactionDateTime }}</td>
          </tr>
        </table>
      </div>
      <div v-else-if="initialClick">
        Ei leidnud tulemusi.
      </div>

    </div>
  </div>
</template>

<script>
import AccountInfoTable from "@/components/AccountInfoTable";

export default {
  name: "TransactionView",
  components: {AccountInfoTable},
  data: function () {
    return {
      accounts: {},
      customerId: this.$route.query.id,
      accountId: null,
      statements: {},
      initialClick: false
    }
  },
  methods: {
    findAccountsInfoByCustomerId: function (customerId) {
      this.$http.get('/account/customer-id', {
        params: {
          id: customerId
        }
      })
          .then(response => {
            this.accounts = response.data
            this.accountId = this.accounts[0].accountId
          }).catch(reason => console.log(error.response.data))
    },
    getStatementByAccountId: function () {
      this.$http.get("/statement/account-id", {
            params: {
              accountId: this.accountId
            }
          }
      ).then(response => {
        this.initialClick = true
        this.statements = response.data.statements
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }

  },

  mounted() {
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

<style scoped>

</style>