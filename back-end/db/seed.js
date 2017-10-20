var models = require('../models');

var commentsData = [{
  content: 'Comment A',
  votes: 6
}, {
  content: 'Comment B',
  votes: 3
}, {
  content: 'Comment C',
  votes: 12
}];

models.Comment.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing comments: ', err);
    return;
  }
  console.log('Removed all Comments');

  models.Comment.create(commentsData, function(err, comments) {
    if (err) {
      console.log('Error creating comments: ', err);
      return;
    }
    console.log('Created', comments.length, 'comments');
    return;
  })
});


models.TextPost.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing TextPosts', err);
    return;
  }
  console.log('Removed all TextPosts');

  models.TextPost.create([{
    title: 'Title', 
    content: 'Content',
    thumbnail_image_url: 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
    votes: 3,
    comments: [commentsData[0], commentsData[1]]
  }, {
    title: 'Another Title',
    content: 'Some more content',
    thumbnail_image_url: 'http://www.petmd.com/sites/default/files/sleepy-cat-125522297.jpg',
    votes: 8,
    comments: [commentsData[2]]
  }, {
    title: 'My Last Title',
    content: 'Yo some dope content',
    thumbnail_image_url: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/693C/production/_95804962_p0517py6.jpg',
    votes: 12,
    comments: []
  }], function(err, posts) {
    if (err) {
      console.log('Error creating TextPosts', err);
      return;
    }
    console.log('Created', posts.length, 'posts');
    return;
  });
});