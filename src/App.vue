<template>
  <div id="app" onscroll="scroll(e)">
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
window.addEventListener('scroll', scrollFunction)
function scrollFunction () {
  console.log(document.body.scrollTop)
  var bar = document.querySelector('.md-bottom-bar')
  if (document.body.scrollTop !== 0) {
    bar.classList.add('scroll')
  } else if (document.body.scrollTop === 0) {
    bar.classList.remove('scroll')
  }
}
</script>

<style>
#app {

}
.location {
  color: black;
  font-size: 36px;
}
.img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.title {
  font-size: 20px;
}
.clock {
  width: 20px;
  padding-left: 5px;
}
.scroll {
  transform: translateY(100px);
}
.unScroll {
  transform: translateY(-100px);
}

</style>
