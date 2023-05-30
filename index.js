const express = require("express");
const app = express();

//using cors if env not worked properly 
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;

const { readdirSync } = require("fs")
readdirSync("./routes").map(file => app.use("/", require("./routes/" + file)))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
