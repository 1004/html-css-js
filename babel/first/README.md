babel:
用来将es6 转为 浏览器支持的低版本代码

转成什么需要配合
preset

node.js  一个js 运行环境 
npm: node package manager  包管理器

npm run build  编译项目  进行js代码的转换
npm install  安装 已经在package.json 里的包


安装babel
根据官网安装
npm install --save-dev @babel/core @babel/cli

安装 preset
npm install @babel/preset-env --save-dev
