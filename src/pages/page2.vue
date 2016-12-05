<template lang="html">
  <div>
    <h1>History</h1>
    <md-list class="custom-list md-triple-line" v-for="item in data.api.data.history">
      <md-list-item>
        <md-avatar>
          <img src="./../assets/green.png">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Location: {{ item.location}}</span>
          <span>Date Time: {{moment(item.timestamp)}}</span>
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
import moment from 'moment'
export default {
  data () {
    return {
      uri: 'https://api-iot.herokuapp.com/api/',
      inActive: ''
    }
  },
  methods: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  mounted () {
    // this.$http.get(this.uri + 'history').then((res) => {
    //   console.log(res.data)
    //   this.histories = res.data
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
