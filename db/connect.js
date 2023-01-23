const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }).then(res =>{
      console.log("Database Connected")
    }).catch(err => {
      console.log(Error, err.message)
    });
};

module.exports = connectDB;
