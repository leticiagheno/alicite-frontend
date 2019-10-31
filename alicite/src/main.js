import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.use(require('vue-chunks'));
Vue.use(VueSweetalert2);

export const EventBus = new Vue();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
