## 初始化项目
`npm init` 会生成 package.json 包配置文件

## 默认安装webpack
```npm install webpack webpack-cli -D```

## 安装调试工具 自动启动本地服务器  生成目标到内存中 速度快
`npm install webpack-dev-server ---save-dev`


## 新建webpack配置文件
`webpack.config.js`


## 安装 插件 
####用来做可以拓展 webpack 的能力 从打包优化和压缩、一直到重新定义环境中的变量

>html-webpack-plugin
* html 模板到模板     可以通过此插件自定制 index.html 页面的内容
             `npm install html-webpack-plugin -D`


## 安装loader 静态资源转换
####loader是一种打包的方案，webpack默认只识别js结尾的文件，当遇到其他格式的文件后，webpack并不知道如何去处理。此时，我们可以定义一种规则，告诉webpack当他遇到某种格式的文件后，去求助于相应的loader。

>css_loader 加载css
`npm install css-loader -D`

>style-loader
`npm install style-loader -D`
或者统一 `npm i style-loader css-loader -D`

>打包处理css中与 url路径相关的文件 url-loader
`npm i url-loader file-loader -D`

>art template -dev 是在开发中使用
`npm install art-template --save`
`npm install art-template-loader --save-dev`


## 安装代码依赖
>Swiper
`npm install swiper --save-dev`
