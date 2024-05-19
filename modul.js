const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/Note")
  .then(() => {
    console.log("connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

let schema = new mongoose.Schema({
  user_id:{type:String},
  id: { type: String, required: true },
  token:{ type: String},
  title: { type: String},
  description: {
    type: String,
    required: true,
  },
  favorite:{type:Boolean},
  createdate: { type: Number },
  updatedate:{ type: Number },
});
let Model = new mongoose.model("Note", schema);
module.exports = Model;
