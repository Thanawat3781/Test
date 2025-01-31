const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Test Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Application started and Listening on port ${PORT}`);
});
