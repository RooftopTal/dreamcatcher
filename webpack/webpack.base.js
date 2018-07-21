const path = require('path');
const rootDir = path.resolve(__dirname, '..');

const HtmlWebpack = require('html-webpack-plugin');

function getBaseExports(runMode) {
    return {
        devServer: {
            contentBase: path.resolve(rootDir, 'dist'),
            port: 3001
        },
        devtool: (runMode === 'development') ? 'inline-source-map' : false,
        entry: {
            app: [ path.resolve(rootDir, 'src', 'boot.ts') ],
            vendor: [ path.resolve(rootDir, 'src', 'vendor.ts') ],
            scss: [ path.resolve(rootDir, 'src', 'sass', 'app.scss') ]
        },
        mode: runMode,
        module: {
            rules: [
                { loader: 'raw-loader', test: /\.(css|html)$/ },
                { loader: 'ts-loader', exclude: /node_modules/, test: /\.ts$/ },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS
                    ]
                },
                {
                    test: /\.(png|woff(2)?|ttf|eot|svg)$/,
                    loader: 'file-loader?name=fonts/[name].[ext]'
                }
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
}

module.exports = {
    getBaseExports: getBaseExports
};