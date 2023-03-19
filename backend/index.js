const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

const UserRoute = require("./routes/user.routes");
const PostRoute = require("./routes/post.routes");
const CommentRoute = require("./routes/comment.routes");
const LikesRoute = require("./routes/like.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users", UserRoute);
app.use("/posts", PostRoute);
app.use("/comments", CommentRoute);
app.use("/likes", LikesRoute);

app.get("/", (req, res) => res.send("Server Running"));

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on PORT ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
