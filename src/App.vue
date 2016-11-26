<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>Hello App!</h1>
    <ul>
      <li>
        <router-link to="/">Page1</router-link>
      </li>
      <li>
        <router-link to="/page2">Page2</router-link>
      </li>
    </ul> -->

    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
      <div class="bottom">
        <buttom-bar id="footer"/>
      </div>

  </div>
</template>

<script>
import ButtomBar from 'components/ButtomBar'
export default {
  name: 'app',
  components: {
    ButtomBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
