import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("../pages/Home/Index.vue") },
    { path: "/about", component: () => import("../pages/About/Index.vue") },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
