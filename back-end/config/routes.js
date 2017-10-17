var express = require('express');
var router = express.Router();
var textPostsController = require('../controllers/textPosts');
var commentsController = require('../controllers/comments');

//Post Routes
router.get('/api/posts', textPostsController.index);

//Comment Routes
router.get('/api/posts/:post_id/comments', commentsController.index);

module.exports = router;