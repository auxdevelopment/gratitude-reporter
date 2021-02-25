<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/reports">Reports</router-link> |
      <router-link to="/#">Export</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  color: white;
  background-color: rgb(26, 5, 5);

  font-size: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #364f69;

    &.router-link-exact-active {
      color: purple;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default class App extends Vue {
}
</script>
