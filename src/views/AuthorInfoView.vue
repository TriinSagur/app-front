<template>
<div>
  <h1>This is the Author page</h1>
  <br>
  <input placeholder="Sisesta autori ID" v-model="authorId">
  <br>
  <button v-on:click="findAuthorById">Vajuta</button>
  <br>
  Eesnimi: {{author.firstName}}
  <br>
  Perekonnanimi: {{author.lastName}}
</div>
</template>

<script>
export default {
  name: "AuthorInfoView",
  data: function () {
    return {
      authorId: 0,
      author: {}
    }
  },
  methods: {
    findAuthorById: function () {
      this.$http.get('/author/id', {
        params: {
          id: this.authorId
        }
      }).then(response => {
        this.author = response.data
      }).catch( error => alert(error))
    }
  }
}
</script>

<style scoped>

</style>