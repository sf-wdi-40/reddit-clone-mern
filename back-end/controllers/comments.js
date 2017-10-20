var models = require('../models');
var Comment = models.Comment;
var TextPost = models.TextPost;

function index(req, res) {
  Comment.find({ post_id: req.params.post_id }, function(err, comments) {
    if (err) res.send(err);
    else res.json(comments);
  });
}

function create(req, res) {
  Comment.create(req.body, function(err, comment){
    if (err) res.end(err);
    else {
      TextPost.findById(req.params.post_id, function(err, post) {
        if (err) res.send(err);
        else {
          post.comments.push(comment);
          post.save();
          res.json(comment);
        }
      })
    }
  });
}

function update(req, res) {
  console.log('****', req.body);
  Comment.findByIdAndUpdate(req.params.comment_id, 
    {$set: req.body}, function(err, comment){
    if (err) res.send(err);
    else res.json(comment);
  });
}

module.exports.index = index;
module.exports.create = create;
module.exports.update = update;