var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin');//html模板编译工具
var path = require('path')

module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        filename: 'build.js'
    },

    module: {
        rules: [
            //处理html模板
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                    // loader: 'babel-loader'
                }
            }
        ]

    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'view/index-all.html',
            filename: 'view/index-tpl.html'
            // inject: true // Inject all scripts into the body
        })
    ]
}