# reactflix-graphQL-backend #
In this project, I will be setting up a graphQL backend for my "REACTFLIX" project (repo: https://github.com/ebui91/reactflix).

### Getting Started ###
Fork and clone this repository. Open up the terminal and navigate to the source directory for this project. You can install dependencies by typing:

```
npm install --save
```

Afterwards, initialize your server:
```
node server.js
```

You'll also need to request an API key from themoviedb.org. Afterwards, you can create a .env file in the source directory:
```
touch .env
```
![alt text](https://github.com/ebui91/reactflix-graphQL-backend/blob/master/images/env.png)



### GraphiQL ###
GraphiQL is a user interface included with GraphQL. It allows for us to interact with our back-end and make mock queries without a front-end. In order to access GraphiQL, simply open your browswer and navigate to `http://localhost:4000/graphql`. In our `server.js` file, we set up GraphiQL to run on the `/graphql` endpoint.

Current Movies playing in theatres:
![alt text](https://github.com/ebui91/reactflix-graphQL-backend/blob/master/images/movies.png)

Search Results:
![alt text](https://github.com/ebui91/reactflix-graphQL-backend/blob/master/images/searchResults.png)

Variables in GraphQL were defined in our `schema.js` file, so using GraphiQL, we can send the `searchResults` query with dynamic variables that would be attached to user input on the front-end. 


### Setting Variables ###
Here are the ranges for the variables if you wish to experiment with different queries with `searchResults`.
- Genres must be referred to by their ID for queries.
```
    genres: [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }
    ]
```
- `yearMin`: 1960-2017
- `yearMax`: 1961-2018
- `ratingMin`: 0-9
- `ratingMax`: 1-10
- `runtimeMin`: 0-199 (minutes)
- `runtimeMax`: 1-200 (minutes)
- `page`: Variable depending on how many results there are. Each page contains 20 results.


### Conclusion ###
So in this project, we created a schema for our GraphQL backend. We defined a `MovieType`, which is a GraphQL object that contains all of the information that Reactflix needs. We then defined a `RootQuery` with two queries: `movies` and `searchResults`. This fulfills all of the requirements that Reactflix needs on the backend. The next step will be to implement GraphQL on the front end and set it up so that our endpoints go through GraphQL to be processed by this backend. That'll be for another day though. I hope to upload a YouTube tutorial of this project soon, so I'll drop the link once I've finished recording. Thanks for checking out this project!



