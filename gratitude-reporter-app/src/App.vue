<template>
  <div id="app">
    <div id="nav">
        <router-link to="/"> Journal </router-link>
        <router-link to="/reports"> Einträge </router-link>
        <router-link to="/export"> Export </router-link>
      <router-view/>
    </div>
    <div id="icon-copyright">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Shippori+Mincho+B1&display=swap');

body {
  color: white;
  background-color: #112a6e;
  font-size: 30px;

  margin: 0;

  max-height: 100vh;
}

#app {
  font-family: "Shippori Mincho B1", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app .page {
  padding-top: 5vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#app .page .header {
  color: #fcdab7;
  font-size: 28px;
  font-weight: bold;
}

#app .page .sub-header {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bold;

  margin-bottom: 5vh;
  text-align: center;

  padding-left: 10vw;
  padding-right: 10vw;
}

#nav {
  margin: 0;
  padding: 30px;
  background-color: #112a6e;
  border-bottom: 1px solid #112a6e;

  font-size: 28px;

  a {
    font-weight: bold;
    color: #fcdab7;
    text-decoration: none;

    &.router-link-exact-active {
      color: rgb(248, 125, 9);
    }
  }
}

button {
  border: none;
  color: #ffffff;
  
  padding: 15px;

  background-color: #ffbc58;
  font-weight: bold;

  margin-top: 10px;
  font-size: 20px;
  font-family: "Shippori Mincho B1", Helvetica, Arial, sans-serif;
}

textarea {
  background-color: #fcdab7;
  border: none;

  resize: none;
  padding: 10px;

  width: 80vw;
  height: 30vh;

  max-width: 800px;

  font-size: 20px;

  font-family: "Shippori Mincho B1", Helvetica, Arial, sans-serif;
}

#icon-copyright {
  font-size: 12px;
  color: white;
  font-style: none;
  text-align: center;

  margin-top: 25vh;
}

#icon-copyright a {
  color: white;
  font-weight: bold;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default class App extends Vue {
}
</script>
