<template>
  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">kontonumber</th>
      <th scope="col">kontojääk</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="account in accounts">
      <th>{{ account.accountNumber }}</th>
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
