import { createRouter, createWebHashHistory } from "vue-router";
import { getLocale, setI18nLanguage, loadLocaleMessages, SUPPORT_LOCALES } from "../i18n";

import type { Router, RouteRecordRaw } from "vue-router";
import type { I18n } from "vue-i18n";

export function setupRouter(i18n: I18n): Router {
    const locale = getLocale(i18n);
    const routes: RouteRecordRaw[] = [
        { path: "/", component: () => import("../pages/Home/Index.vue") },
        { path: "/about", component: () => import("../pages/About/Index.vue") },
    ];

    const router = createRouter({
        history: createWebHashHistory(),
        routes,
    });

    router.beforeEach(async (to) => {
        const { query } = to;
        const lang = query.lang as string;
        if (lang && SUPPORT_LOCALES.includes(lang)) {
            if (!i18n.global.availableLocales.includes(lang)) {
                await loadLocaleMessages(i18n, lang);
            }
            setI18nLanguage(i18n, lang);
        }
    });

    return router;
}
