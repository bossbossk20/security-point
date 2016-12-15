<template lang="html">
  <div class="history">
    <h1>History</h1>
    <md-list class="custom-list md-triple-line" v-for="item in data.api.data.history">
      <md-list-item>
        <md-avatar>
          <img src="./../assets/green.png">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Location: {{item.location}} {{ location(item.location)}}</span>
          <span>Date Time: {{moment(item.timestamp)}}</span>
        </div>
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
    },
    location: function (num) {
      if (num === '1') {
        return 'หน้าห้องพวงครวม 2'
      } else if (num === '2') {
        return 'ห้องนำ้หน้ามินิมาร์ท'
      } else if (num === '3') {
        return 'ห้องนำ้สำนักคอม'
      } else if (num === '4') {
        return 'หน้าห้องพยาบาล'
      } else if (num === '5') {
        return 'หน้าห้องนำ้ลิฟหลัง'
      } else if (num === '6') {
        return 'ลานกลางฝั่งสำนักงานคณบดี'
      }
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
