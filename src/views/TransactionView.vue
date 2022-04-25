<template>
  <div>
    <h1>Pangatoimingud</h1>

    <div v-if="successMessage.length > 0" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>

    <!--    KONTO VALIK-->
    <div v-if="accountActionsDiv">
      <div class="d-inline-flex p2">
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
        Kuva kontoväljavõte
      </button>

      <button v-on:click="startNewPayment" type="button" class="btn btn-outline-success m-3">
        Alusta ülekannet
      </button>
      <br>
    </div>

    <!--ÜLEKANDE VALIKUD-->
    <div v-if="transferActionsDiv">
      <div class="d-inline-flex p2">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Saatja nimi</label>
          <input disabled type="text" v-model="senderName">
        </div>
      </div>
      <br>

      <div class="d-inline-flex p2">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Saatja konto</label>
          <select class="form-select" id="inputGroupSelect01" v-model="accountId">
            <option v-for="account in accounts" :value="account.accountId">{{
                account.accountNumber
              }}
            </option>
          </select>
        </div>
      </div>
      <br>


      <div class="d-inline-flex p2">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Saaja konto</label>
          <input type="text" v-model="receiverAccountNumber">
        </div>
      </div>
      <br>

      <div class="d-inline-flex p2">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Summa</label>
          <input placeholder="0,00" type="number" v-model="amount">
        </div>


      </div>
      <button v-on:click="backToAccountActions" type="button" class="btn btn-outline-success m-3">
        Tagasi
      </button>

      <button v-on:click="sendMoney" type="button" class="btn btn-outline-success m-3">
        Teosta makse
      </button>
      <br>

    </div>
    <!--KONTO VÄLJAVÕTE-->
    <div v-if="statementsDiv">
      <button v-on:click="backToAccountActions" type="button" class="btn btn-outline-success m-3">
        Tagasi
      </button>
      <Statement :initial-click="initialClick" :statements="statements"/>
    </div>


  </div>

</template>

<script>
import Statement from "@/components/Statement";

export default {
  name: 'TransactionView',
  components: {Statement},

  data: function () {
    return {
      firstName: 'Otto',
      lastName: 'Triin',
      accounts: {},
      customerId: this.$route.query.id,
      accountId: null,
      statements: {},
      initialClick: false,
      senderAccountId: null,
      receiverAccountNumber: '',
      senderName: 'Otto Triin',
      amount: null,
      accountActionsDiv: true,
      transferActionsDiv: false,
      statementsDiv: false,
      successMessage: ''
    }
  },

  methods: {
    sendMoney: function () {

      let tranferRequest = {
        senderAccountId: this.accountId,
        receiverAccountNumber: this.receiverAccountNumber,
        amount: this.amount
      }

      this.$http.post("/bank/out", tranferRequest
      ).then(response => {
        this.hideAllDivs()
        this.successMessage = 'Ülekanne õnnestus, tehingu ID: ' + response.data.referenceNumber
        this.accountActionsDiv = true
      }).catch(error => {
        console.log(error)
      })
    }
    ,
    hideAllDivs: function () {
      this.successMessage = ''
      this.accountActionsDiv = false
      this.transferActionsDiv = false
      this.statementsDiv = false
    },
    backToAccountActions: function () {
      this.hideAllDivs()
      this.accountActionsDiv = true
      this.receiverAccountNumber = null
      this.receiverAccountNumber = null
    }
    ,
    findAccountsInfoByCustomerId: function (id) {
      this.$http.get('/account/customer-id', {
        params: {
          id: id
        }
      })
          .then(response => {
            this.accounts = response.data
            this.accountId = this.accounts[0].accountId

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
        this.hideAllDivs()
        this.statementsDiv = true
        this.initialClick = true
        this.statements = response.data.statements
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    startNewPayment: function () {
      this.hideAllDivs()
      this.transferActionsDiv = true
    }
  },

  mounted() {
    this.findAccountsInfoByCustomerId(1)

  }
}
</script>

