import Vue from 'vue';
import App from './App.vue';

import PortalVue from 'portal-vue';

import { Kalendar } from 'kalendar-vue';

Vue.use(PortalVue);
Vue.use(Kalendar);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
