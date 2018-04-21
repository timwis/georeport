import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome/icons/camera'
import Icon from 'vue-awesome/components/Icon'
import './registerServiceWorker'

import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component('icon', Icon)

new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
  store
}).$mount('#application')
