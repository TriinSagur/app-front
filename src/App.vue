<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/customer">Customer Info</router-link> |
      <router-link to="/account-info">Account info</router-link> |
      <router-link to="/new-customer">Add Customers</router-link> |
      <router-link to="/old-customer">Remove Customers</router-link> |
      <router-link to="/input">Input</router-link> |
      <router-link to="/output">Output</router-link> |
      <router-link to="/transaction">Transactions</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #07080a;
  background-color: antiquewhite;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #151508;
}

nav a.router-link-exact-active {
  color: #960923;
}
</style>
<script>export default {
  components: {}
}
</script>