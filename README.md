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

#### 其他: // css modules

    - [参考这篇/上](https://juejin.cn/post/6844903633109139464)
    - [参考这篇/中](https://juejin.cn/post/6844903633662771207)
    - [参考这篇/下](https://juejin.cn/post/6844903638289252360)

1. class 名必须是驼峰形式，否则不能正常在 js 里使用 styles.table 来引用
2. 由于 css 模块化是默认，当你希望使用正常的全局 css 时，需要通过:local 和 :global 切换，不方便
3. 所有的 className 都必须使用 {style.className} 的形式

处于 beta 的 create-react-app v2 已经支持。使用方法为一律将 css 文件命名为 XXX.modules.css, 以上例，即为 table.modules.css, 即可使用。这一解决法的优雅在于，全局的 css 可以正常使用，只有带.modules.css 后缀的才会被 modules 化。

**升级版** [react-css-modules](https://github.com/gajus/react-css-modules#extending-component-styles)

#### 其他: // Css-in-Js 新浪潮 emotion/styled-componens

#### 意想不到的解决方案: // [tachyons](http://tachyons.io/) [tailwind.css](https://github.com/tailwindlabs/tailwindcss)

### `npm config set legacy-peer-deps true` `npm install --save react-scripts`

#### 其他: // [styled-jsx](https://www.npmjs.com/package/styled-jsx#getting-started) npm i --save styled-jsx

**用法**(scss)

1. yarn add styled-jsx
2. yarn add -D node-sass styled-jsx-plugin-sass (在 tsx 中,需要下载类型库 `yarn add --save @types/styled-jsx`)
3. .babelrc 配置
   `{ "plugins": [ [ "styled-jsx/babel", { "plugins": ["styled-jsx-plugin-sass"] } ] ] }`
4. 其他

- 三方 UI 库的支持:
  相对有点繁琐，思想是取得 styled-jsx 转化过后的类名，注入到三方库的 className props 里，这样即解决了支持，又保全了局部 css，代码如下

```
import Link from 'react-router-dom' // 例子，给Link组件添加样式

const scoped = resolveScopedStyles(
  <scope>
    <style jsx>{'.link { color: green }'}</style>
  </scope>
)

const App = ({ children }) => (
  <div>
    {children}
    <Link to="/about" className={`link ${scoped.className}`}>
      About
    </Link>

    {scoped.styles}
  </div>
);

function resolveScopedStyles(scope) {
  return {
    className: scope.props.className, //就是被styled-jsx添加的独特className
    styles: scope.props.children      //就是style，注入到App组件中
  }
}

```

5. 插件

- [高亮](https://marketplace.visualstudio.com/items?itemName=blanu.vscode-styled-jsx)
- [语法补全](https://marketplace.visualstudio.com/items?itemName=AndrewRazumovsky.vscode-styled-jsx-languageserver)

#### display:grid

```
<!-- grid box -->
display: grid;
grid-template-rows: 6rem 1fr 6rem;
grid-template-columns: 20rem 1fr 20rem;
grid-template-areas:
"header header header"
"nav main aside"
"footer footer footer";
height: 100vh;

<!-- grid area -->
grid-area: XXX ;
```
