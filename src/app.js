const express = require("express");
const connectDB = require("./config/db.js");
const routes = require("./routes/books.routes.js");

const app = express();
const port = 3001;

connectDB();

app.use(express.json());

app.use("/api/books", routes);

app.listen(port, () => {
  console.log(`Server on port ${port}\nhttp://localhost:${port}`);
});
