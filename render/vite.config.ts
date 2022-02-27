import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// console.log("process.cwd()", process.cwd());
// console.log("dirname", __dirname);

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: "render/public",
    base: "./",
    build: {
        outDir: "dist-render",
    },
    define: {
        __VUE_I18N_LEGACY_API__: false,
    },
    resolve: {
        alias: {
            "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
        },
    },
    plugins: [vue(), vueI18n({ include: path.resolve(__dirname, "./src/i18n/locales/**") })],
});
