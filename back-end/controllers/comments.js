var models = require('../models');
var Comment = models.Comment;

function index(req, res) {
  Comment.find({ post_id: req.query.post_id }, function(err, comments) {
    if (err) res.send(err);
    else res.json(comments);
  });
}

module.exports.index = index;