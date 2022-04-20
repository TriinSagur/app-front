<template>
<div>
  <h1>This is the Author page</h1>
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
      this.$http.get('/author', {
        params: {
          id: this.authorId
        }
      }).then(response => {
        this.author = response.data
      }).catch( error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>