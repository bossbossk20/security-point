<template lang="html">
  <div class="page1">
    <h1>page1</h1>
  </div>

</template>

<script>
export default {
  data () {
    return {
      uri: 'https://api-iot.herokuapp.com/api/'
    }
  },
  mounted () {
    this.$http.get(this.uri + 'inactive').then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="css">

</style>
