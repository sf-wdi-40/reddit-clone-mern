var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Comment = require('./comment');

var TextPostSchema = new Schema({
	title: String, 
	content: String, 
	thumbnail_image_url: String, 
	votes: Number,
	comments: [Comment.Schema] 
});

var TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;