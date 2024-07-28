const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.send("Users New Form");
});

module.exports = router;
