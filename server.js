const express= require('express');
const expressGraphQL= require('express-graphql');
const schema= require('./schema.js');

const app= express();
const port= 4000;

// Define the entry point for any client that wants to use GraphQL through our server
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});