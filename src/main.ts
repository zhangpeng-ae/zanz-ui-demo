import { createApp } from "vue";
import App from "./App.vue";
import ZanzContainer from "@/components/container";
import ZanzButton from "@/components/button";

import "@/styles/index.scss";

const app = createApp(App);

app.use(ZanzContainer);
app.use(ZanzButton);

app.mount("#app");
