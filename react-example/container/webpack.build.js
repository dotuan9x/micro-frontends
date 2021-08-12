const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: [path.resolve('src/index.jsx')],
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: 'https://micro-frontends.tuando.net/demo/react-example/container/dist/',
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
            name: 'main',
            remotes: {
                Products: 'Products@https://micro-frontends.tuando.net/demo/react-example/products/dist/products.js',
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve('public/index.html'),
            filename: path.resolve('../index.html'),
            chunksSortMode: 'none'
        })
    ]
};
