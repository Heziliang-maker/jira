# Getting Started with Create React App

## [json-server](https://github.com/typicode/json-server)

**=> : Get a full fake REST API with zero coding in less than 30 seconds (seriously)**


### antd 定制主题  

1. yarn add @craco/craco @craco-less
2. 项目根目录创建craco.config.js
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
3. package.json scripts替换:

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


### CSS  **css in js** ('jss') styled-component/emotion

  传统css的缺陷

  - 没有模块的概念
  - 缺乏作用域
  - 隐式依赖 样式难以追踪
  - 没有变量

#### 最受欢迎的方案:emotion的安装与使用

 - yarn add @emotion/react @emotion/styled
