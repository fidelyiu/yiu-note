# 1.依赖

## 1.1.Vue 3 + Typescript + Vite

这个项目使用 Vue 3 `<script setup>` 函数组件, 详情查看 [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup).

## 1.2.node

node版本为：16.13.2

## 1.3.yarn

yarn版本为：1.22.17。

[安装](https://classic.yarnpkg.com/en/docs/install)：`npm install --global yarn`

yarn还是使用1版本的。

- [1版本文档](https://classic.yarnpkg.com/en/)
- [2版本文档](https://yarnpkg.com/)


根目录下的`.yarnrc`文件是用来覆盖当前项目`yarn config list`配置的。

如果是`npm`项目是`.npmrc`文件。


# 2.编辑器建议

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# 3.其他

## `.vue`文件导入的类型支持

由于 TypeScript 无法处理`.vue`导入的类型信息，它们被默认为通用的 Vue 组件类型。

在大多数情况下，如果你并不关心模板之外的组件 prop 类型，这是好的。

然而，如果你希望在`.vue`导入中获得实际的 prop 类型（例如在使用手动`h(..)`调用时获得 prop 验证）。

你可以在 VSCode 中的命令行模块中运行 `Volar: Switch TS Plugin on/off` 来关闭或开启 Volar 的 `.vue` 文件的类型支持插件。 (貌似没用)

## 主线程项目

主线程项目中的路径注意事项：
- preload的路径要使用结对路径，即文件在哪，就要从盘符开始算起.
  - `path.join(__dirname, "/preload/index.js")`,
  - `path.join(__dirname, jsAdapter("/preload/index.ts"))`,
- 其他地方一般使用相对路径，其中相对路径这里使用`/`、`..`开头。
  - `../dist-render/index.html`
  - `/preload/index.ts`
