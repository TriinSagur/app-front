<template>
  <table class="table table-hover table-dark">
    <thead>
    <tr>
      <th scope="col">Kontonumber</th>
      <th scope="col">Kontojääk</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="account in accounts">
      <td>{{ account.accountNumber }}</td>
      <td>{{ account.balance }}</td>
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
