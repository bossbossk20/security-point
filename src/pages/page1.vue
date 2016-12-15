<template lang="html">
  <div >
    <h2>Recents inActive Point</h2>
    <div class="phone-viewport" v-show="data.api.data.inactive.length != 0">
      <md-list v-for="item in data.api.data.inactive" style="z-index:0;">
        <md-list-item>
          <md-avatar>
            <img src="./../assets/red.png">
          </md-avatar>
          <span># {{item.count}} <img src="./../assets/clock-128.png" class="clock"> {{moment(item.timestamp)}}</span>
          <md-list-expand>
            <md-list v-for="location in item.locations">
              <md-list-item class="md-inset">{{location.location}} {{locat(location.location)}}</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>
      </md-list>
    </div>
    <div v-show="data.api.data.inactive.length == 0">
      <h3>All of point was Active</h3>
    </div>
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
  },
  methods: {
    locat: function (num) {
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
    },
    moment: function (date) {
      return moment(date).format('DD/MM/YYYY, h:mm:ss a')
    }
  }
}
</script>

<style lang="css">

</style>
