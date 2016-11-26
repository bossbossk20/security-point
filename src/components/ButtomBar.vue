<template lang="html">
  <md-bottom-bar md-shift v-md-theme="playground.theme">
    <md-bottom-bar-item @click="setTheme('indigo', '/');page('/')" md-icon="assignment">Recents</md-bottom-bar-item>
    <md-bottom-bar-item @click="setTheme('default', 'history');page('/page2')" md-icon="history">History</md-bottom-bar-item>
  </md-bottom-bar>
</template>

<script>
export default {
  data () {
    return {
      playground: {
        theme: 'brown'
      }
    }
  },
  methods: {
    setTheme (theme, path) {
      this.playground.theme = theme
      this.$router.push({path: path})
    }
  }
}
</script>

<style lang="css">
  .bottom {
    height: 60px;
    position: fixed;
    bottom:0%;
    width: 100%;
  }
</style>
