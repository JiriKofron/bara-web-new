import { createApp } from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag-next";
import router from "./router/index.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faFileMedical } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPeopleGroup,
  faFileMedical,
  faHandHoldingHand,
  faMobile,
  faAt,
  faCircleExclamation,
  faMapMarker
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
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
