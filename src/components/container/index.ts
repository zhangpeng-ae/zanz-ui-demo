import { App } from "vue";

import ZanzContainer from "./Container.vue";
import ZanzHeader from "./Header.vue";
import ZanzFooter from "./Footer.vue";
import ZanzAside from "./Aside.vue";
import ZanzMain from "./Main.vue";

export default {
	install(app: App) {
		app.component("ZanzContainer", ZanzContainer);
		app.component("ZanzHeader", ZanzHeader);
		app.component("ZanzFooter", ZanzFooter);
		app.component("ZanzAside", ZanzAside);
		app.component("ZanzMain", ZanzMain);
	},
};
