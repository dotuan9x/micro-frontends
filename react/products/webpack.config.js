const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const dependencies = require("./package.json").dependencies;
const publicPath = process.env.mode === 'development' ? '/': '/react/products/dist/';

module.exports = {
    devtool: 'inline-source-map',
    mode: process.env.mode,
    entry: [path.resolve('src/index.jsx')],
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: publicPath,
        crossOriginLoading: 'anonymous'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        open: false,
        hot: true,
        historyApiFallback: true,
        port: 8001
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            library: {type: 'var', name: 'products'},
            remotes: {
                RelatedProducts: 'RelatedProducts',
            },
            shared: {
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies.react,
                },
            },
        }),
        new HTMLWebpackPlugin({
            template: path.resolve('public/index.html'),
            filename: process.env.mode === 'development' ? './index.html' : path.resolve('../index.html'),
            chunksSortMode: 'none'
        })
    ]
};
