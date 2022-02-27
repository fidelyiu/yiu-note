import { createApp } from "vue";
import App from "./App.vue";
import { setupI18n } from "./i18n";
import { setupRouter } from "./router";
import zh from "./i18n/locales/zh.json";

const app = createApp(App);

const i18n = setupI18n({
    legacy: false,
    locale: "zh",
    fallbackLocale: ["zh", "en"],
    formatFallbackMessages: true,
    messages: { zh },
});

const router = setupRouter(i18n);

app.use(i18n);
app.use(router);

app.mount("#app");
