import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { AppStorage } from './storage/app-storage'
import { v4 as uuidv4 } from 'uuid';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false
Vue.use(Toasted)

new Vue({
  router,
  render: h => h(App),
  created: async () => {
    await AppStorage.initialiseIfNeeded(uuidv4());
  }
}).$mount('#app')
