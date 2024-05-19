const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/Note")
  .then(() => {
    console.log("User connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

  let schema = new mongoose.Schema({
    avatar:{type:String},
    token:{ type: String, required: true },
    user_id:{ type: String, required: true },
    username: { type: String, required: true },
    bio:{type:String,default:"Tell me about yourself"},
    email: { type: String,required: true},
    password: {
      type: String,
      required: true,
    },
  
  });
  let User = new mongoose.model("User", schema);
  module.exports = User;