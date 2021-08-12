const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const dependencies = require("./package.json").dependencies;

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: [path.resolve('src/index.jsx')],
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: 'https://micro-frontends.tuando.net/demo/react-redux/products/dist/',
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
        port: 8002,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'Products',
            library: {type: 'var', name: 'Products'},
            filename: 'products.js',
            exposes: {
                './App': './src/App',
            },
            shared: {
                'react': {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies.react,
                },
                'react-dom': {
                    eager: true,
                    singleton: true,
                }
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve('public/index.html'),
            filename: path.resolve('index.html'),
            chunksSortMode: 'none'
        })
    ]
};
