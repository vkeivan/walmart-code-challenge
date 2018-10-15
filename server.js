/**
 *  Dev Server for Walmart Code Challenge Project
 *  Author: Keivan Vosoughi
 */
const express = require('express');
const app = express()
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const PORT = process.env.PORT || 4000;

const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(express.static(path.join(__dirname, '/')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('index'));
app .listen(PORT, () => console.log(`Listening on ${ PORT }`));



