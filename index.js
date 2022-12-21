const express = require('express')
const app = express()
require("./db-connection")
const graphqlExpress = require("express-graphql");
const bookSchema = require("./graphql/BookSchema").BookSchema;


app.listen(8000, ()=> {
    console.log("Node app is running at 8000")
});

app.use('/graphql', graphqlExpress.graphqlHTTP({
    schema: bookSchema,
    rootValue: global,
    graphiql: true
}));