import { createRouter, createWebHistory } from "vue-router";
import { trackRouter } from "vue-gtag-next";

import TheHome from "@/views/TheHome.vue";
import ContactPage from "@/views/ContactPage.vue";
import TheMediaPage from "@/views/TheMediaPage.vue";
import ThePriceList from "@/views/ThePriceList.vue";

const routes = [
  { path: "/", name: "app", component: TheHome },
  { path: "/contact", name: "contact", component: ContactPage },
  { path: "/media", name: "media", component: TheMediaPage },
  { path: "/pricelist", name: "pricelist", component: ThePriceList },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      // BEFORE:
      // return { selector: to.hash }

      return { el: to.hash };
    }
  },
  routes, // short for `routes: routes`
});

trackRouter(router);

export default router;
