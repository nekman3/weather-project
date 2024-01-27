import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./lib/store.js";

const app = createApp(App);
app.use(store).use(router).mount("#app");
