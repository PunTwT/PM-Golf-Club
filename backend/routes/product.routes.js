const express = require("express");
const db = require("../config/db");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Get all products");

  db.query("select * from product", (err, result) => {
    if (err) {
        console.log(err)
        return res.status(500).json(err);
    }
    res.json(result);
  })
});

module.exports = router;
