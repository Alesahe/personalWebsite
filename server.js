const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/html/clock.html"));
});
app.get("/books", function (req, res) {
  res.sendFile(path.join(__dirname, "public/html/books.html"));
});

app.listen(8000, () => console.log("port 8000: http://localhost:8000/ or http://127.0.0.1:8000") );