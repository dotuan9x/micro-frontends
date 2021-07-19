const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const dependencies = require("./package.json").dependencies;
const publicPath = 'auto';

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: [path.resolve('src/index.jsx')],
    output: {
        publicPath: publicPath,
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    devServer: {
        open: false,
        hot: true,
        historyApiFallback: true,
        port: 8002
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'RelatedProducts',
            library: {type: 'var', name: 'RelatedProducts'},
            filename: 'related.js',
            remotes: {},
            exposes: {
                './Products': './src/App',
            },
            shared: {
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: dependencies.react,
                },
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve('public/index.html'),
            filename: './index.html',
            chunksSortMode: 'none'
        })
    ]
};
