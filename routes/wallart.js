const express = require("express");
const router = express.Router();
const datas = require("../wallartData")

router.get("/wallart", (req, res) => {
  res.send(datas);
});

module.exports = router;