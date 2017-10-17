var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CommentSchema = new Schema({
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;