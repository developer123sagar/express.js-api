const express = require("express");
const router = express.Router();
const datas = require("../planterData")
console.log(datas)

router.get("/planters", (req, res) => {
  res.send(datas);
});

module.exports = router;