const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/graphql-mongoose",).then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{
    console.log("No Connection to Database");
})