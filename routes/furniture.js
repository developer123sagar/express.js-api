const express = require("express");
const router = express.Router();

router.get("/furniture", (req, res) => {
  res.send("i am the furniture");
});

module.exports = router;