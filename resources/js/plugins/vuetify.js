import Vue from "vue";
import Vuetify from "vuetify";
import en from "vuetify/es5/locale/en";
import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "md" || "fa",
    },
    lang: { locales: { en }, current: "en" },
    theme: { dark: false },
    // theme: {
    //     themes: {
    //         light: {
    //             primary: '#3f51b5',
    //             secondary: '#696969',
    //             accent: '#8c9eff',
    //             error: '#b71c1c',
    //         },
    //     },
    // },
});
