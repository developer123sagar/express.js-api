const express = require("express");
const router = express.Router();

const productData = [
    {
        id: 1,
        title: "hello"
    },
    {
        id: 2,
        title: "hi"
    },
    {
        id: 3,
        title: "welcome"
    },
]
router.get("/products", (req, res) => {
  res.send(productData);
});

module.exports = router;