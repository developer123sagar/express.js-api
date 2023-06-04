const express = require("express");
const router = express.Router();
const datas = require("../chairData")

router.get("/chairs", (req, res) => {
  res.send(datas);
});

module.exports = router;