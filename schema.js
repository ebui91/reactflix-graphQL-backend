require("dotenv").config();
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


// Defining the Movie object type.
const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        vote_average: { type: GraphQLString },
        overview: { type: GraphQLString }
    })
});


// Root Query. Contains API request for currently playing movies and movies from search result parameters.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parentValue, args) {
                return axios.get(`${process.env.API_URL}?api_key=${process.env.API_KEY}`)
                    .then(res => res.data.results);
            }
        },
        searchResults: {
            type: new GraphQLList(MovieType),
            args: {
                genre: { type: GraphQLInt },
                yearMin: { type: GraphQLInt },
                yearMax: { type: GraphQLInt },
                ratingMin: { type: GraphQLInt },
                ratingMax: { type: GraphQLInt },
                runtimeMin: { type: GraphQLInt },
                runtimeMax: { type: GraphQLInt },
                page: { type: GraphQLInt }
            },
            resolve(parentValue, args) {
                return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
                    + `&certification_country=US&sort_by=popularity.desc`
                    + `&with_genres=${args.genre}`
                    + `&primary_release_date.gte=${args.yearMin}-01-01&primary_release_date.lte=${args.yearMax}-12-31`
                    + `&vote_average.gte=${args.ratingMin}`
                    + `&vote_average.lte=${args.ratingMax}`
                    + `&with_runtime.gte=${args.runtimeMin}`
                    + `&with_runtime.lte=${args.runtimeMax}`
                    + `&page=${args.page}`)
                        .then(res => res.data.results);
            }
        }
    }
});


module.exports= new GraphQLSchema({
    query: RootQuery
});