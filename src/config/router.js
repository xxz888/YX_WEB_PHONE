import Vue from "vue"
import Router from "vue-router"
import Home from "../components/home/index.vue"
import first from "../components/home/first.vue"
import second from "../components/home/second.vue"
import third from "../components/home/third.vue"
import aboutUs from "../components/home/aboutUs.vue"

import p_Login from "../components/phone/p_Login.vue"
import p_Login1 from "../components/phone/p_Login1.vue"
import p_Login2 from "../components/phone/p_Login2.vue"

Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    name: "Home",
    component: Home,
  },
    {
      path: "/first",
      name: "first",
      component: first,
    },
    {
      path: "/second/:id",
      name: "second",
      component: second,

    },
    {
      path: "/third/:id/:secondid",
      name: "third",
      component: third,
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      component: aboutUs,
    },
    {
      path: "/p_Login",
      name: "p_Login",
      component: p_Login,
    },

    {
      path: "/p_Login1",
      name: "p_Login1",
      component: p_Login1,
    },

    {
      path: "/p_Login2",
      name: "p_Login2",
      component: p_Login2,
    },


  ]
})
