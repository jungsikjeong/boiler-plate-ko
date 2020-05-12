const express = require("express");
const app = express();
const port = 5000;

/**
    useNewUrlParser
    useUnifiedTopology
    useCreateIndex
    useFindAndModify 이 설정들을 안해주면 에러가 날 수있다.
 */
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://wndtlr1024:qorrn1024@practice-ptijw.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
