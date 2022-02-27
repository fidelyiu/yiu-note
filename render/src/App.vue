<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <h1>Hello World!</h1>We are using Node.js
    <span id="node-version"></span>,
    Chromium
    <span id="chrome-version"></span>,
    and Electron
    <span id="electron-version"></span>.
    <div>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        <div>{{ t("你好") }}</div>
        <router-view></router-view>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
