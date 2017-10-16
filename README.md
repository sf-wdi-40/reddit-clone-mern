# reddit-clone-mern
Reddit clone using MERN stack


## Back-End: Node, Express, and MongoDB (Mongoose)
1. Use Express to set up a basic Node server that fetches data from MongoDB
2. Make sure MongoDB is running (`mongod`), then start your Node server
2. Create `Post` resources
  1. Create a `Post` model that contains `title`, `content`, `image_url`
  2. Add the following API CRUD routes for `Posts`
    - `/api/posts` – GET, POST
    - `api/posts/:post_id` – GET, PUT, DELETE
  3. Fill out the `Posts` controller using Mongoose queries
4. Create `Comment` resources
  1. Create a `Comment` model that contains `content`, `post_id`
  2. Add the following API CRUD routes for `Comments`
    - `/api/posts/:post_id/comments` – GET, POST
    - `api/posts/:post_id/comments/:comment_id` – GET, PUT, DELETE
  3. Fill out the `Comments` controller using Mongoose queries
5. Use POSTMAN to create a `Post` and a `Comment`


## Front-End: React
1. Set up a basic React app
2. Create a homepage where ALL posts' images and titles are displayed
3. Implement React router
  - `/posts/:post_id` – Clicking on a post should redirect to its show page (all post content, attached comments, and form for adding comments)
  - `/posts/new` – Should show form to add a `Post`


## BONUS
1. Implement infinitely nested comments (you can comment on a comment)
2. Implement a `User` model 
  - Should have fields `first_name`, `last_name`, `email`, and `password_hash`
  - Implement authentication
  - Both `Post` and `Comment` should have `author_id` (views should also include author names)
