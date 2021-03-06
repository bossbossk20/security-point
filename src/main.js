import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import VueMaterial from 'vue-material'
import Axios from 'axios'
import store from './store'
import 'vue-material/dist/vue-material.css'
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.prototype.$http = Axios
Vue.material.theme.registerAll({
  default: {
    primary: 'cyan',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  },
  brown: {
    primary: 'brown',
    accent: 'pink'
  },
  teal: {
    primary: 'teal',
    accent: 'pink'
  },
  orange: {
    orange: 'orange',
    accent: 'pink'
  }
})
const router = new VueRouter({
  routes: [
    { path: '/', component: Page1 },
    { path: '/history', component: Page2 }
  ]
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
