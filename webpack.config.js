/**
 *  Webpack Config for Walmart Code Challenge
 *  Author: Keivan Vosoughi
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "bundle.css"
});

module.exports = {
    mode: 'development',
    entry: { main: './app/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                loaders: ['file-loader']

            },
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.ejs$/,
                use: {
                    loader: 'ejs-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0',  'react',
                            'stage-2'],
                        plugins: [
                            "transform-decorators-legacy",
                            "transform-class-properties",
                            "transform-es2015-destructuring"
                        ]
                    }
                }]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin('dist', {} ),
        extractSass,
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: './views/index.ejs',
            title: 'Code Challenge'
        }),
        new WebpackMd5Hash()
    ],
    node: {
        fs: 'empty'
    }
};
