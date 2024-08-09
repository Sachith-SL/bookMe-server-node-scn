const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { text: "world" });
    // res.status(404).json({ statusCode: "404", message: "Page Not Found" });
    // res.send('Hello World!')
  });

module.exports = router;