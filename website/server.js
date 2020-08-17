const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use("/", express.static(path.join(__dirname, "build")));

// app.get("/", function (req, res) {
//   console.log("hi");
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});
app.listen(PORT, () => {
  console.log("app now listening for requests on port " + PORT);
});
