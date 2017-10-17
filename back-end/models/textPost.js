var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TextPostSchema = new Schema({
});

var TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;