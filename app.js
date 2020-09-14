const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/first-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"));

app.use("/users", require("./routes/users"));

app.listen(3000, console.log("server listening on port 3000"));
