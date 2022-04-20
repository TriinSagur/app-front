<template>
<div>
  <h1>This is the Book page</h1>
  <br>
  <input placeholder="Raamatu ID" v-model="bookId">
  <button v-on:click="findBookById">Too raamat ID-ga</button>
  <br>
  <br>
  Pealkiri: {{book.title}}
  <br>
  Aasta: {{book.year}}
</div>
</template>

<script>
export default {
  name: "BookInfoView",
  data: function () {
    return {
      bookId: 0,
      book: {}
    }
  },
  methods: {
    findBookById: function () {

      this.$http.get('/book', {
        params: {
          id: this.bookId
        }
      }).then(response => {
        this.book = response.data
        alert("Success")
      }).catch( error => alert(error))
    },
  }
}
</script>

<style scoped>

</style>