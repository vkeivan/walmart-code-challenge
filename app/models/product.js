var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var ProductSchema = mongoose.Schema({
    itemId: String,
    name: String,
    categoryPath: String,
    shortDescription: String,
    longDescription: String,
    thumbnailImage: String,
    color: String
});

ProductSchema.plugin(timestamps);
var Product = mongoose.model('Product', ProductSchema);
module.export = Product;
