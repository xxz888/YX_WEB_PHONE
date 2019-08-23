import Vue from "vue"
import Router from "vue-router"
import Home from "../components/home/index.vue"
import first from "../components/home/first.vue"
import second from "../components/home/second.vue"
import third from "../components/home/third.vue"
import aboutUs from "../components/home/aboutUs.vue"

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
    }


  ]
})
