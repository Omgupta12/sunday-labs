const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(`mongodb://127.0.0.1:27017/sunday`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`DataBase is connected`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
