const path = require('path');
const rootDir = path.resolve(__dirname, '..');

const HtmlWebpack = require('html-webpack-plugin');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 3001
    },
    devtool: 'source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src', 'boot.ts') ],
        vendor: [ path.resolve(rootDir, 'src', 'vendor.ts') ]
    },
    module: {
        rules: [
            { loader: 'raw-loader', test: /\.(css|html)$/ },
            { loader: 'ts-loader', exclude: /node_modules/, test: /\.ts$/ }
        ]
    },
    node:{
        fs: 'empty'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins:[
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        }),
        new HtmlWebpack({
            filename: '404.html',
            inject: false,
            template: path.resolve(rootDir, 'src', '404.html')
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
};