import { createI18n } from "vue-i18n";
import type { I18n, I18nOptions, Locale, VueI18n, Composer } from "vue-i18n";
import { nextTick } from "vue";

export const SUPPORT_LOCALES = ["zh", "en"];

export function getLocale(i18n: I18n): string {
    if (i18n.mode === "legacy") {
        return (i18n.global as unknown as VueI18n).locale;
    }
    return (i18n.global as unknown as Composer).locale.value;
}

export function setLocale(i18n: I18n, locale: Locale): void {
    if (i18n.mode === "legacy") {
        (i18n.global as unknown as VueI18n).locale = locale;
    } else {
        (i18n.global as unknown as Composer).locale.value = locale;
    }
}

export function setI18nLanguage(i18n: I18n, locale: Locale): void {
    setLocale(i18n, locale);
    document.querySelector("html")!.setAttribute("lang", locale);
}

const getResourceMessages = (r: any) => r.default || r;

export async function loadLocaleMessages(i18n: I18n, locale: Locale) {
    const messages = await import(/* @vite-ignore */ `./locales/${locale}.json`).then(getResourceMessages);
    i18n.global.setLocaleMessage(locale, messages);
    return nextTick();
}

export function setupI18n(options: I18nOptions = { locale: "zh" }): I18n {
    const i18n = createI18n(options);
    setI18nLanguage(i18n, options.locale!);
    return i18n;
}
