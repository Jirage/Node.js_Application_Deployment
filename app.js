const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "Hello, this is a Node.js application running in a Docker container!"
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
