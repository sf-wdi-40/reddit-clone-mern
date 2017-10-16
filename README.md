# Reddit Clone – MERN stack
Building a [Reddit](https://www.reddit.com/) clone using the popular MERN (Mongo – Express – React – Node) stack.



## CREATING THE BACK-END

### Setting up Node, Express, and MongoDB (Mongoose)
1. Use Express to set up a basic Node server that fetches data from MongoDB
2. Make sure MongoDB is running (`mongod`), then start your Node server

### Creating TextPost resource
1. Create a `TextPost` model that contains `title`, `content`, `thumbnail_image_url`, `votes`
2. Add the following API CRUD routes for `Posts`
    - `/api/posts` – GET, POST
    - `api/posts/:post_id` – GET, PUT, DELETE
3. Fill out the `Posts` controller using Mongoose queries

### Creating Comment resource
1. Create a `Comment` model that contains `content`, `post_id`, `votes`
2. Add the following API CRUD routes for `Comments`
    - `/api/posts/:post_id/comments` – GET, POST
    - `api/posts/:post_id/comments/:comment_id` – GET, PUT, DELETE
3. Fill out the `Comments` controller using Mongoose queries

### Verifying Data Creation
1. Use POSTMAN to create two `Post`s 
2. Use POSTMAN to create two `Comment`s, both attached to the first `Post` you created



## CREATING THE FRONT-END

### Setting up React
1. Set up a basic React app
3. Pull in [react-router](https://github.com/ReactTraining/react-router) to implement the following routes
    - `/` – Should show home dashboard where posts' titles and thumbnail images are displayed
    - `/posts/:post_id` – Clicking on a post should redirect to its show page (all post content, attached comments, and form for adding comments)
    
### Implementing User Stories
1. User should see all posts on the home page, ranked in descending order by `votes`
2. User should be able to click on a "Create Post" button and see a modal to create a new `Post`
3. User should be able to vote on a post
4. User should be able to create a `Comment` on a `Post`
5. User should be able to vote on a `Comment`
6. User should be able to comment on a comment (requires adding field to `Comment` model)



## BONUS
1. Create a `LinkPost` resource
    - Model should contain fields `title`, `link_url`, `thumbnail_image_url`, `votes`
2. Create a `User` resource 
    - Model should contain fields `first_name`, `last_name`, `email`, and `password_hash`
    - Implement authentication
    - Both `Post` and `Comment` should have `author_id` (views should include author names)
3. Implement a `SubReddit` model
    - Should have `name` and `slug` (e.g. 'Software Engineering', 'software-engineering')
    - `Post` should have a `subreddit_id`
    - There should be a React route for going to subreddit routes (e.g. `/r/software-engineering`)
