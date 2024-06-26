import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSignOut} from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faStar } from  "@fortawesome/free-solid-svg-icons";
import { faCheck } from  "@fortawesome/free-solid-svg-icons";
import { faTh } from  "@fortawesome/free-solid-svg-icons";
import { faUsers} from  "@fortawesome/free-solid-svg-icons";
import { faUniversalAccess} from  "@fortawesome/free-solid-svg-icons";

library.add(faNewspaper,faUser,faCar,faComments,faBars,faSignOut,faLock,faSmile,faStar,faCheck,faTh,faUsers,faUniversalAccess);

const app = createApp(App)

app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')