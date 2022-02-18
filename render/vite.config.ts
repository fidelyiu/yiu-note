import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: "render/public",
    base: "./",
    build: {
        outDir: "dist-render",
    },
    plugins: [vue()],
});
