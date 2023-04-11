const express = require("express");
const userRouter = require("./routes/user");
const tweetRouter = require("./routes/tweet");
const app = express();

const port = 3010;

app.use("/user", userRouter);
//경로,컴포넌트연결처럼
app.use("/tweet", tweetRouter);
//.use->미들웨어
app.get("/", (req, res) => {
  res.send("Hello,kai!");
});

app.listen(port, () => {
  console.log(`Server listening on port : ${port}`);
});
