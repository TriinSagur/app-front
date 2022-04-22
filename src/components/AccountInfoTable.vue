<template>
  <table class="table table-hover">
    <thead>
    <tr>
      <th>Konto number</th>
      <th>Konto jääk</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="account in accounts">
      <td>{{account.accountNumber}}</td>
      <td>{{account.balance}}</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'AccountInfoTable',
  props: {
    accounts: {}
  }
}
</script>
