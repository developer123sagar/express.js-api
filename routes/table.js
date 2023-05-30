const express = require("express");
const router = express.Router();

router.get("/table", (req, res) => {
  res.send("i am the table");
});

module.exports = router;