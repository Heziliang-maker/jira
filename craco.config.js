const CracoLessPlugin = require("craco-less");
// 配置主题样式
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(0,82,204)",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
