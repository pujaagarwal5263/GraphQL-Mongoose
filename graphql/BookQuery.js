var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var BookModel = require('../model/Book');
var bookType = require('./BookType').bookType;

// Query
exports.BookQuery = new GraphQLObjectType({
  name: 'Query',
  fields:  ()=> {
    return {
      books: {
        type: new GraphQLList(bookType),
        resolve:  async ()=> {
          const books = await BookModel.find()
          if (!books) {
            throw new Error('error while fetching data')
          }
          return books
        }
      }
    }
  }
})