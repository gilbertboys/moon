const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const rootDir = __dirname;

app.use(express.static(rootDir));

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
