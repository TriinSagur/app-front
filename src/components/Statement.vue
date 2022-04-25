<template>

  <div class="d-inline-flex p2">
    <div v-if="statements.length > 0">
      <table class="table table-hover">
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
      Ei leidnud tulemust!
    </div>
  </div>

</template>
<script>
export default {
  name: 'Statement',
  props: {
    initialClick: {},
    statements: {}
  }
}
</script>
