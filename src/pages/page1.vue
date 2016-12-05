<template lang="html">
  <div>
    <h1>Recents</h1>
    <md-list class="custom-list md-triple-line" v-for="item in data.api.data.inactive">
      <md-list-item>
        <md-avatar>
          <img src="./../assets/red.png">
        </md-avatar>

        <div class="md-list-text-container">
          <span># {{item.count}}</span>
          <span>InActive Point : <b v-for="location in item.locations">{{location.location}} </b></span>
          <!-- <p>I'll be in your neighborhood doing errands...</p> -->
        </div>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>
        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      uri: 'https://api-iot.herokuapp.com/api/',
      inActive: ''
    }
  },
  mounted () {
    // this.$http.get(this.uri + 'inactive').then((res) => {
    //   console.log(res.data)
    //   this.inActive = res.data
    // })
  },
  computed: {
    ...mapState([
      'data'
    ])
  }
}
</script>

<style lang="css">

</style>
