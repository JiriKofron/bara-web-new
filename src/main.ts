import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag-next";
import router from "./router/index.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

createApp(App)
  .use(router)
  .use(
    VueGtag as never,
    {
      property: {
        id: "UA-148345268-1",
      },
    },
    router
  )
  .mount("#app");
