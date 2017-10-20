var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CommentSchema = require('./comment').schema;

var TextPostSchema = new Schema({
  title: String,
  content: String,
  thumbnail_image_url: String,
  votes: Number,
  updated_at: Date,
  comments: [CommentSchema],
});

TextPostSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

var TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;