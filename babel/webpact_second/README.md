## 1.初始化项目
npm init

## 2.安装webpack 包
npm install --save-dev webpack-cli@3.3.12 webpack@4.44.1


## 3.配置
创建 配置文件 并修改

## 4.webpack
静态模块打包器， 当webpack 处理应用程序时候 会将这些模块打包成一个或者多个文件


### 4.1 entry,output
```$xslt
module.exports = {
    entry: './src/index.js',
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
```
entry:入口文件
也有可能多个文件 entry:{}
output 也可能是多个 output:{filename;'[name].js'}

### 4.2 loader
处理非js文件的模块

webpack 和 babel 链接的桥梁  就是loader

先将es6 通过loader 找到 babel 去编译 es5 然后在交给 webpack 进行打包
`npm install --save-dev babel-loader@8.1.0 @babel/core@7.11.0 @babel/preset-env@7.21.4`

### 4.3 rules 配置loader 规则
```js
module:{
    rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loader: 'babel-loader'
        }
    ]
}
```

### 4.4 安装其他的转换    
其他高级语法 进行的转换 `import "core-js/stable";`
`npm install --save-dev core-js`


## 5.plugins
HtmlWebpackPlugin html进行自动打包到dist, 并且自动加入dist
MiniCssExtractPlugin  css 自动打包到dist

## 6.图片

file-loader: 图片处理, 只能处理入口js 文件里的
> 如何处理html 里面的
* html-withimg-loader: html 嵌套图片的处理
* url-loader  除了具有file-loader ，也有其他的能力， 有个大小的配置，如果在范围之内则base64 表示，安装必须先安装file-loader


## 7. webpack-dev-server 搭建开发环境
安装 webpack-dev-server   保存自动打包
