/**
 *  Dev Server for Walmart Code Challenge Project
 *  Author: Keivan Vosoughi
 */
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
// var logger = require('morgan');
const webpackConfig = require('./webpack.config');
const PORT = process.env.PORT || 4000;
const MONGO_DB_URL = 'mongodb://localhost:27017/walmart';

const compiler = webpack(webpackConfig);
const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

var ProductSchema = mongoose.Schema({
    itemId: String,
    name: String,
    categoryPath: String,
    shortDescription: String,
    longDescription: String,
    thumbnailImage: String,
    color: String,
    keywords: [String]
});

ProductSchema.plugin(timestamps);
ProductSchema.plugin(textSearch);


// ProductSchema.index({name: 'text', 'categoryPath': 'text'});
// ProductSchema.index({keywords: 'text'});
var Product = mongoose.model('Product', ProductSchema);



mongoose.connect(MONGO_DB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to MONGODB");
}).catch(err => {
    console.log('Error occurred while connecting to MONGODB.', err);
    process.exit();
});


app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

var staticPath = 'public';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
        next();
});


/*---------------------------------------------------------------------*/
app.get('/api/products/?', function(req, res) {
    Product
        .find({})
        .select({__v: 0,})
        .limit(100)
        .sort({
            createdAt: -1
        })
        .exec(function(err, products) {
            console.log('products', products);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: 'Internal error occurred while retrieving the products!'
                });
            }
            res.json(products);
        });
});
/*---------------------------------------------------------------------*/
/*---------------------------------------------------------------------*/
app.get('/api/search/:keyword', function(req, res) {
    console.log(req.params.keyword);
    Product
        .find({})
        .where({ categoryPath: new RegExp(req.params.keyword, 'i') })


        // .textSearch(req.params.keyword, (err, output) => {
        //     console.log(err, output);
        // });
        // .sort({
        //     createdAt: -1
        // })
        .exec(function(err, products) {
            console.log('products', products);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: 'Internal error occurred while retrieving the products!'
                });
            }
            res.json(products);
        });;

});






app.post('/product', function(req, res, next) {
    // var body = req.body;
    // console.log(body);
    //
    // var product = new Product({
    //     itemId: body.itemId.trim(),
    //     name: body.itemId.trim(),
    //     categoryPath: body.categoryPath.trim(),
    //     shortDescription: body.shortDescription.trim(),
    //     longDescription: body.longDescription.trim(),
    //     thumbnailImage: body.thumbnailImage.trim(),
    //     color: body.color.trim()
    // });
    //
    // product.save(function(err, server) {
    //     if (err) throw err;
    //     res.json({
    //         product
    //     });
    // });
});




app.use(express.static(staticPath));
app.use('/', express.static(staticPath));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));



