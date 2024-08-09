const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    res.send("Reservations List");
  });
  
  router.get("/", (req, res) => {
    res.send("Reservations List");
  });
  
  router.get("/:id", (req, res) => {
    res.send(`no ${req.params.id} Reservation details`);
  });
  
  router.put("/:id", (req, res) => {
    res.send(req.params.id);
  });
  router.delete("/:id", (req, res) => {
    res.send(req.params.id);
  });


module.exports = router;