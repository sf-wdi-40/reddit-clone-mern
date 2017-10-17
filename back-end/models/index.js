var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/front_end");

module.exports.TextPost = require("./textPost");
module.exports.Comment = require("./comment");