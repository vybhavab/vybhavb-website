import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueTypedJs from "vue-typed-js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub);
library.add(faGlobe);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueTypedJs);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
