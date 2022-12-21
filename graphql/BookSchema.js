var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var query = require('./BookQuery').BookQuery;
const { GraphQLString } = require('graphql');
const { bookType } = require('./BookType');
var bookModel = require('../model/Book');

exports.BookSchema = new GraphQLSchema({
  query: query,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields:()=> ({
      addBook:{
        type: bookType,
        description:"Add a book",
        args:{
          name: {type: GraphQLString},
          author:{type: GraphQLString}
        },
        resolve: async(root, args)=> {
          const newBook = await bookModel.create(args);
          if (!newBook) {
            throw new Error('error');
          }
          return newBook
        }
      },
      deleteBook:{
        type: bookType,
        description:"Delete a book",
        args: { id: { type: GraphQLString}},
        resolve: async(root, args)=> {
          const removedBook = await bookModel.findByIdAndRemove(args.id)
          if (!removedBook) {
            throw new Error('error')
          }
          return removedBook;
        }
      },
      updateBook: {
        type: bookType,
        description:"Update a book",
        args: {
            id: { type: GraphQLString},
            name: { type: GraphQLString},
            author: { type:GraphQLString}
        },
        resolve: async(root, args) =>{
            const UpdatedBook = await bookModel.findByIdAndUpdate(args.id,args);
            if (!UpdatedBook) {
              throw new Error('Error')
            }
            return UpdatedBook;
        }
    }
    })
  })
  
})