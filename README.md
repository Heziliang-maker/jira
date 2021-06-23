# Getting Started with Create React App

## [json-server](https://github.com/typicode/json-server)

**=> : Get a full fake REST API with zero coding in less than 30 seconds (seriously)**

### antd 定制主题

1. yarn add @craco/craco @craco-less
2. 项目根目录创建 craco.config.js

```
const CracoLessPlugin = require('craco-less');

module.exports = {
 plugins: [
   {
     plugin: CracoLessPlugin,
     options: {
       lessLoaderOptions: {
         lessOptions: {
           modifyVars: { '@primary-color': '#1DA57A' },
           javascriptEnabled: true,
         },
       },
     },
   },
 ],
};
```

3. package.json scripts 替换:

```
<!-- package.json -->

"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}
```

4. 重新启动 `npm start`

### CSS **css in js** ('jss') styled-component/emotion //

传统 css 的缺陷

- 没有模块的概念
- 缺乏作用域
- 隐式依赖 样式难以追踪
- 没有变量

#### 最受欢迎的方案:emotion 的安装与使用

- yarn add @emotion/react @emotion/styled

#### 其他: // css modules [参考这篇](https://juejin.cn/post/6844903633109139464)

1. class 名必须是驼峰形式，否则不能正常在 js 里使用 styles.table 来引用
2. 由于 css 模块化是默认，当你希望使用正常的全局 css 时，需要通过:local 和 :global 切换，不方便
3. 所有的 className 都必须使用 {style.className} 的形式

处于 beta 的 create-react-app v2 已经支持。使用方法为一律将 css 文件命名为 XXX.modules.css, 以上例，即为 table.modules.css, 即可使用。这一解决法的优雅在于，全局的 css 可以正常使用，只有带.modules.css 后缀的才会被 modules 化。

**升级版** [react-css-modules](https://github.com/gajus/react-css-modules#extending-component-styles)

#### 其他: // Css-in-Js 新浪潮 emotion/styled-componens

#### 其他: // styled-jsx/

#### 意想不到的解决方案: // [tachyons](http://tachyons.io/) [tailwind](https://github.com/tailwindlabs/tailwindcss)
