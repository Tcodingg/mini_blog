const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   title: String,
   note: String,
   creator: String,
   tags: [String],
   image: String,
   likeCount: {
      type: Number,
      default: 0,
   },
   createdAt: {
      type: Date,
      default: new Date(),
   },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
