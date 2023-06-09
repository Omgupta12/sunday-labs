const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  caption: { type: String, required: true },
  url: { type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  place: {
    type: String,
    default: "New Delhi",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostModel = new model("post", PostSchema);

module.exports = PostModel;
