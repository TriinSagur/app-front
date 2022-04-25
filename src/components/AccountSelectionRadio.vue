<template>
  <section>
    <h3>vali konto</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="account in accounts">
        <input type="radio" v-model="accountId" :value="account.accountId">{{ account.accountNumber }}
        €{{ account.balance }}
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'AccountSelectionRadio',
  props: {
    accountId: {},
    accounts: {}
  }
}
</script>