import Vue from 'vue'
import App from './App.vue'
import store from './store'
import mixins from './mixins/mixin'
//import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  store,
  mixins:[mixins],
  render: h => h(App)
}).$mount('#app')
