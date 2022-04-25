<template>
  <div>
    <h1>Pangatoimingud</h1>

    <div v-if="successMessage.length > 0" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>

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
      <br>
      <button v-on:click="startNewPayment" type="button" class="btn btn-outline-success m-3">
        Alusta ülekannet
      </button>
      <br>
    </div>


    <div v-if="transferActionsDiv">
      <div>
        <div class="d-inline-flex p-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Saatja Nimi</label>
            </div>
            <input type="text" v-model="senderName">
          </div>
        </div>
      </div>

      <!--  SAATJA    -->
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


      <!--  SAAJA KONTO NUMBER    -->
      <div>
        <div class="d-inline-flex p-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Saaja konto</label>
            </div>
            <input type="text" v-model="receiverAccountNumber">
          </div>
        </div>
      </div>

      <!--  SUMMA    -->
      <div>
        <div class="d-inline-flex p-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Summa</label>
            </div>
            <input type="number" placeholder="0" v-model="amount">
          </div>
        </div>
      </div>
      <button v-on:click="backToAccountActions" type="button" class="btn btn-outline-success m-3">
        Tagasi
      </button>
      <br>
      <button v-on:click="sendMoney" type="button" class="btn btn-outline-success m-3">
        Teosta makse
      </button>
      <br>

    </div>


    <!--    KONTO VÄLJAVÕTE   -->
    <div v-if="statementDiv">
      <button v-on:click="backToAccountActions" type="button" class="btn btn-outline-success m-3">
        Tagasi
      </button>
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
      customerId: this.$route.query.id,
      accountId: null,
      statement: {},
      statements: {},
      initialClick: false,
      selectedAccountId: null,
      receiverAccountNumber: '',
      senderName: 'Otto Triin',
      senderAccountId: null,
      amount: null,
      accountActionsDiv: true,
      transferActionsDiv: false,
      statementDiv: false,
      successMessage: ''

    };
  },
  methods: {

    hideAllDivs: function () {
      this.successMessage = ''
      this.accountActionsDiv = false
      this.transferActionsDiv = false
      this.statementDiv = false
    },

    backToAccountActions: function () {
      this.hideAllDivs()
      this.accountActionsDiv = true
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

    sendMoney: function () {
      let transferRequest = {
        senderAccountId: this.accountId,
        receiverAccountNumber: this.receiverAccountNumber,
        amount: this.amount
      }
      this.$http.post("/bank/send", transferRequest
      ).then(response => {
        this.hideAllDivs()
        this.successMessage = 'Ülekanne õnnestus, tehingu ID: ' + response.data.referenceNumber
        this.accountActionsDiv = true

      }).catch(error => {
        console.log(error)
      })
    },

    getStatementByAccountId: function () {
      this.$http.get('/statement/account-id', {
        params: {
          accountId: this.accountId
        }
      })
          .then(response => {
            this.hideAllDivs()
            this.statementDiv = true
            this.statements = response.data.statements
            this.initialClick = true
            console.log(response.data)
          })
          .catch(error => console.log(error))
    },
    startNewPayment: function () {
      this.hideAllDivs()
      this.transferActionsDiv = true
      this.selectedAccountId = this.accountId
    }

  },

  mounted() {
    this.findAccountsInfoByCustomerId(1)
  }
}
</script>

