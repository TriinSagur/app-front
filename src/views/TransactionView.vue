<template>
  <div>
    <h1>Pangatoimingud</h1>

    <div v-if="accountActionsDiv">


      <div class="d-inline-flex p-2">
        <section>
          <h3>vali konto</h3>
          <ul class="list-group">
            <li class="list-group-item" v-for="account in accounts">
              <input type="radio" v-model="accountId" :value="account.accountId">{{ account.accountNumber }}
              €{{ account.balance }}
            </li>
          </ul>
        </section>
      </div>

      <br>
      <button v-on:click="getStatementByAccountId" type="button" class="btn btn-outline-success m-3">
        Kuva kontoväljavõtet
      </button>

      <button v-on:click="startNewPayment" type="button" class="btn btn-outline-success m-3">
        Alusta ülekannet
      </button>
      <br>
      <br>

    </div>

    <div v-if="transferActionsDiv">

      <!--      Saatja nimi -->
      <div>
        <div class="d-inline-flex p-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Saatja konto</label>
            </div>
            <input type="text" v-model:type="senderName">


          </div>
        </div>
      </div>

      <!--      Saatja konto-->
      <div>
        <div class="d-inline-flex p-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Saatja konto</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" v-model="accountId">
              <option selected v-for="account in accounts" :value="account.accountId">{{
                  account.accountNumber
                }}
              </option>
            </select>
          </div>
        </div>
      </div>


      <!--      Saaja konto number-->
      <div>
        <div class="d-inline-flex p-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Saatja konto</label>
            </div>
            <input type="text" v-model:type="receiverAccountNumber">


          </div>
        </div>
      </div>


      <!--      Summa-->
      <div>
        <div class="d-inline-flex p-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Summa</label>
            </div>
            <input type="number" placeholder="0" v-model:type="amount">


          </div>
        </div>
      </div>

      <br>
      <button v-on:click="backToAccountActions" type="button" class="btn btn-outline-success m-3">
        Tagasi
      </button>

      <button v-on:click="startNewPayment" type="button" class="btn btn-outline-success m-3">
        Teosta makse
      </button>
      <br>

    </div>


    <div v-if="statementDiv">

      <StatementTable :initial-click="initialClick" :statements="statements"/>
    </div>





  </div>



</template>

<script>
import StatementTable from "@/components/StatementTable";

export default {
  name: 'TransactionView',
  components: {StatementTable},

  data: function () {
    return {
      accounts: {},
      firstName: 'Otto',
      lastName: 'Triin',
      selectedAccountId: null,
      customerId: this.$route.query.id,
      accountId: null,
      statements: {},
      initialClick: false,
      senderName: 'Otto Triin',
      receiverAccountNumber: '',
      amount: null,
      accountActionsDiv: true,
      transferActionsDiv: false,
      statementDiv: false
    }
  },

  methods: {
    hideAllDivs: function () {
      this.accountActionsDiv = false
      this.transferActionsDiv = false
      this.statementDiv = false
    },

    backToAccountActions: function () {
      this.hideAllDivs()
      this.accountActionsDiv=true
      this.receiverAccountNumber = null
      this.amount = null

    },

    findAccountsInfoByCustomerId: function (id) {
      this.$http.get('/account/customer-id', {
        params: {
          id: id
        }
      })
          .then(response => {
            this.accounts = response.data
            this.accountId = this.accounts[0].accountId
            this.selectedAccountId = this.accountId
          })
          .catch(error => console.log(error.response.data))
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
    },
    startNewPayment: function () {
      this.hideAllDivs()
      this.transferActionsDiv=true
      this.selectedAccountId = this.accountId
    }
  },

  mounted() {
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

