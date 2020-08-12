import Vue from 'vue'
import App from './App.vue'
import defaultRouter from './router' // router
import siteARouter from './router/sitea'
import siteBRouter from './router/siteb'
import defaultStore from './store' // store

Vue.config.productionTip = false

const domain = window.location.hostname;

const router = () => {
  let routes;
  if (domain === 'local.site-a.com') {
    routes = siteARouter;
  } else if (domain === 'local.site-b.com') {
    routes = siteBRouter;
  } else {
    routes = defaultRouter;
  }
  return routes;
}

const store = () => {
  // let stores;
  return defaultStore
}

new Vue({
  router: router(),
  store: store(),
  render: h => h(App)
}).$mount('#app')
