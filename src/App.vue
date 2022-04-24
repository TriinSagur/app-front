<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/customer">CustomerInfo</router-link> |
      <router-link to="/new-customer">NewCustomer</router-link> |
      <router-link to="/remove-customer">RemoveCustomer</router-link> |
      <router-link to="/all-customer">AllCustomers</router-link> |
      <router-link to="/account-info">Account info</router-link> |
      <router-link to="/update-customer">Update Customer</router-link> |
      <router-link to="/input">Input</router-link> |
      <router-link to="/output">Output</router-link> |
      <router-link to="/transaction">Transactions</router-link>

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
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>export default {
  components: {}
}
</script>