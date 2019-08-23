import Vue from "vue"
import App from "./App.vue"
import router from "./config/router"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false

Vue.use(MintUI)


import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.qs = QS;



new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>",
})
