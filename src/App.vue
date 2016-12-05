<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
      <div class="bottom">
        <buttom-bar/>
      </div>
  </div>
</template>

<script>
import ButtomBar from 'components/ButtomBar'
export default {
  name: 'app',
  components: {
    ButtomBar
  },
  data () {
    return {
      inactive: [],
      history: []
    }
  },
  mounted () {
    this.$http.get('https://api-iot.herokuapp.com/api/inactive').then((inac) => {
      this.inactive = inac.data
      this.$http.get('https://api-iot.herokuapp.com/api/history').then((hist) => {
        this.history = hist.data
        this.$store.dispatch('addData', {inactive: this.inactive, history: this.history})
      })
    })
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
