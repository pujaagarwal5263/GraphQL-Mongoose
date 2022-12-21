var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author:{
    type:String,
    required:true
  }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;