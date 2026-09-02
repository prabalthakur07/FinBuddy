const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express works!");
});

const server = app.listen(5051, "127.0.0.1", () => {
  console.log("EXPRESS TEST RUNNING");
  console.log("Address:", server.address());
});