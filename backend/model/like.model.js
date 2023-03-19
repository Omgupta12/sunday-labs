const { Schema, model } = require("mongoose");

const LikeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    like: {
      type: Boolean,
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { timestamps: true }
);

const LikeModel = new model("like", LikeSchema);

module.exports = LikeModel;
