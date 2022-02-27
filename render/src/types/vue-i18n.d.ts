import zh from "../i18n/locales/zh.json";

type MessageSchema = typeof zh;

declare module "vue-i18n" {
    export interface DefineLocaleMessage extends MessageSchema {}
}
