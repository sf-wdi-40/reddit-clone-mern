# Reddit Clone – MERN stack
Building a [Reddit](https://www.reddit.com/) clone using the popular MERN (Mongo – Express – React – Node) stack.

![reddit-homepage](./reddit-homepage.png?raw=true "Reddit Homepage")



## PROJECT SETUP
1. `git clone` this repo
2. Install all dependencies for both the front-end and back-end
3. Make sure MongoDB is running (`mongod`), then start your Node and React servers
    - Back-end and front-end servers should be running on separate ports, in separate Terminal tabs
4. Ensure both servers are up and running by visiting their existing endpoints in your browser
5. Take a look around:
    - BACK-END: What routes, models, and controllers have been set up? What kind of database is it connecting to?
    - FRONT-END: What components have been set up?
        


## CREATING THE BACK-END

### Creating TextPost resource
1. Create a `TextPost` model that contains `title`, `content`, `thumbnail_image_url`, `votes`
2. Add the following API CRUD routes for `Posts`
    - `/api/posts` – GET, POST
    - `/api/posts/:post_id` – GET, PUT, DELETE
3. Fill out the `Posts` controller using Mongoose queries
4. Use POSTMAN or the `seed.js` file to create a `Post` – verify that it shows up at the appropriate endpoint
5. Use POSTMAN to confirm that the other CRUD routes are working as well (PUT, DELETE)

### Creating Comment resource
1. Create a `Comment` model that contains `content`, `post_id`, `votes`
2. Add the following API CRUD routes for `Comments`
    - `/api/posts/:post_id/comments` – GET, POST
    - `/api/posts/:post_id/comments/:comment_id` – GET, PUT, DELETE
3. Fill out the `Comments` controller using Mongoose queries
4. Use POSTMAN or the `seed.js` file to create a `Comment`, attached to a `Post` you've created – verify that it shows up at the appropriate endpoint
5. Use POSTMAN to confirm that the other CRUD routes are working as well (PUT, DELETE)

### Verifying Data Creation
1. Use POSTMAN to create two `Post`s 
2. Use POSTMAN to create two `Comment`s, both attached to the first `Post` you created
3. Populate the `seed.js` file to automate data seeding



## CREATING THE FRONT-END

### Setting up React
1. Set up a basic React app
2. Pull in [react-router](https://github.com/ReactTraining/react-router) to implement the following routes
    - `/` – Should show home dashboard where posts' titles and thumbnail images are displayed
    - `/posts/:post_id` – Clicking on a post should redirect to its show page (all post content, attached comments, and form for adding comments)
3. Put in some placeholder text at the above pages to confirm that your React routing is working
4. Think about the containers you will need
    - What components will each container contain
    - What API requests will each container make
5. Think about the HTTP request library you'd like to use to fetch data from your Node API endpointments (e.g. `$.ajax`, `fetch`, `axios`, etc.)

    
### Implementing User Stories
1. User should see all posts on the home page, ranked in descending order by `votes`
2. User should be able to click on a "Create Post" button and see a modal to create a new `Post`
3. User should be able to vote on a post
4. User should be able to create a `Comment` on a `Post`
5. User should be able to vote on a `Comment`
6. User should be able to comment on a comment (requires adding field to `Comment` model)



## BONUS
1. Create a `LinkPost` resource
    - Another kind of post a Reddit user can upload (simply links to an external link, e.g. news article or imgur page)
    - Model should contain fields `title`, `link_url`, `thumbnail_image_url`, `votes`
2. Create a `User` resource 
    - Model should contain fields `first_name`, `last_name`, `email`, and `password_hash`
    - Implement authentication
    - Both `Post` and `Comment` should have `author_id` (views should include author names)
3. Implement a `SubReddit` model
    - Should have `name` and `slug` (e.g. 'Software Engineering', 'software-engineering')
    - `Post` should have a `subreddit_id`
    - There should be a React route for going to subreddit routes (e.g. `/r/software-engineering`)
