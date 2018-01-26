var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CommentSchema = new Schema({
	content: String,
	votes: Number
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;