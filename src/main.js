// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

// 全局导航钩子
router.beforeEach((to, from, next) => {
  //console.log("aa " + sessionStorage.getItem("userName"))
  if (to.meta.requireAuth) {
    if(sessionStorage.getItem("userName") == null) {
      next({
        path: '/Login',
        query: {
          redirect:to.fullPath
        }
      })
    }else{
      next();
    }
  }
  else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
