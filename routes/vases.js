const express = require("express");
const router = express.Router();
const data = require('../vasesData')

router.get("/vases", (req, res) => {
  res.send(data);
});

module.exports = router;