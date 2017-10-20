var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CommentSchema = require('./comment').schema;

var TextPostSchema = new Schema({
  title: String,
  content: String,
  thumbnail_image_url: String,
  votes: Number,
  comments: [CommentSchema],
  updated_at: Date
});

var TextPost = mongoose.model('TextPost', TextPostSchema);

TextPostSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

module.exports = TextPost;