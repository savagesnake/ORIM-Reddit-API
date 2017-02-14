## ORIM Reddit Post Code Challenge
Using React and the Reddit API. Create an app that will display the hot reddit posts in a grid format.  Please allow the user to paginate through the posts. When complete please push your code to a Github repo and provide Open Road Media with a link.

#### Acceptance Criteria
* Display 5 posts at a time.
* Allow the user to paginate through the posts
* Style the grid and layout

#### API Reference
API Docs:
https://www.reddit.com/dev/api/

Reddit Hot Posts
https://www.reddit.com/r/all/hot

#### File structure

        project/src
        | node_modules
        | components
            |__ Buttons
            |__ Comments
            |__ Header
            |__ List
            |__ Post
            |__ Posts
            |__ Root
        | Sass  
            |__ _app.scss
            |__ _index.scss
            |__ _normalize.scss
            |__  App.css
            |__  main.scss
        App.js
        package.json
        README.md

#### Run Code
*   npm install - to load all of the node modules
*   npm start - to run local server on localhost:3000


#### Run Tests
    node_modules/.bin/mocha --compilers js:babel-core/register ./src/tests/**/*.test.js
