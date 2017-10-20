var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CommentSchema = require('./comment').schema;

var TextPostSchema = new Schema({
  title: String,
  content: String,
  thumbnail_image_url: String,
  votes: Number,
  updatedAt: new Date(),
  comments: [CommentSchema]
});

var TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;