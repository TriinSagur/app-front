<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/new-customer">Add Customers</router-link> |
      <router-link to="/customer">Customer Info</router-link> |
      <router-link to="/account-info">Account Info</router-link> |
      <router-link to="/input">input</router-link> |
      <router-link to="/output">output</router-link> |
      <router-link to="/transaction">transaction</router-link> |
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
