const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {dependencies} = require("./package.json");
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: [path.resolve('src/index.jsx')],
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: 'https://micro-frontends.tuando.net/demo/react-redux/container/dist/',
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
            name: 'container',
            remotes: {
                Products: 'Products@https://micro-frontends.tuando.net/demo/react-redux/products/dist/products.js',
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
                    requiredVersion: dependencies["react-dom"],
                }
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve('public/index.html'),
            filename: path.resolve('../index.html'),
            chunksSortMode: 'none'
        })
    ]
};
