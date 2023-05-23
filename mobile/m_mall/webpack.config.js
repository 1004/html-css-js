const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    mode:'development',
    // mode:'production',
    // Webpack 入口文件 省略后面的/index.js
    entry:{
        index:'./src/pages/index', //首页
        destination:'./src/pages/destination', // 目标页
        persion:'./src/pages/persional', // 目标页
    },
    // Webpack 输出路径
    output:{
        // 输出的目录
        path:resolve('dist'),
        // 输出的文件名
        filename:'js/[name].js'
    },
    // source-map，调试用的，出错的时候，将直接定位到原始代码，而不是转换后的代码
    devtool: 'eval-cheap-module-source-map',
    resolve: {
        // 自动补全（可以省略）的扩展名
        extensions: ['.js'],
        // 路径别名 只能在js 和 css 用
        alias: {
            api: resolve('src/api'),
            icons: resolve('src/assets/icons'),
            styles: resolve('src/assets/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages'),
            utils: resolve('src/utils')
        }
    },
    //不同类型模块的处理规则 ，根据规则 使用特定loader 处理静态资源
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 模板文件
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            // 图片
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    // 小于 10K 的图片转成 base64 编码的 dataURL 字符串写到代码中
                    limit: 10000,
                    // 其他的图片转移到
                    name: 'images/[name].[ext]',
                    esModule: false
                },
                type: "javascript/auto",
            },
            // 字体文件
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    // 自动将依赖注入 html 模板，并输出最终的 html 文件到目标文件夹
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html', // 最终结果
            template: './src/pages/index/index.art', // 模板位置
            chunks: ['index'] // 多模块, 只引入自己的js
        }),
        new HtmlWebpackPlugin({
            filename: 'destination.html', //最终结果
            template: './src/pages/destination/destination.art',
            chunks: ['destination'] // 多模块, 只引入自己的js
        }),
        new HtmlWebpackPlugin({
            filename: 'persion.html', //最终结果
            template: './src/pages/persional/persion.art',
            chunks: ['persion'] // 多模块, 只引入自己的js
        })
    ]
}
