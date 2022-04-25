<template>
  <div v-if="statements.length  > 0">
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
    Ei leidnud tulemusi
  </div>
</template>
<script>
export default {
  name: 'StatementTable',
  props: {
    initialClick: {},
    statements: {}
  }
}
</script>

<style scoped>

</style>