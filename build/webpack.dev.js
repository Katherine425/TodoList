const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = merge(baseConfig, devConfig)