import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/iconfont/iconfont.css'
import DaButton from "./components/button.vue"
import DaDialog from "./components/dialog.vue"
import DaInput from "./components/input.vue"
import DaSwitch from "./components/switch.vue"

Vue.config.productionTip = false

Vue.component(DaButton.name, DaButton);
Vue.component(DaDialog.name, DaDialog);
Vue.component(DaInput.name, DaInput);
Vue.component(DaSwitch.name, DaSwitch);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
