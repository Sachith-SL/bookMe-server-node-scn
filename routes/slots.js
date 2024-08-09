const express = require("express");
const router = express.Router();

// Slot (id,date,startTime,endTime,unitPrice,isAvailable)
const slots = [
    {id:1,date:'2024-08-10',startTime:'09:00',endTime:'10:00',unitPrice:'3000',isAvailable:true},
    {id:2,date:'2024-08-10',startTime:'10:00',endTime:'11:00',unitPrice:'3000',isAvailable:true},
    {id:3,date:'2024-08-10',startTime:'11:00',endTime:'12:00',unitPrice:'3000',isAvailable:true}
]

router.post("/", (req, res) => {
    res.send(slots);
  });
  
  router.get("/", (req, res) => {
    res.send(slots);
  });
  
  router.get("/:id", (req, res) => {
    // res.send(`no ${req.params.id} Slot details`);
    let slot = slots.find(s=>s.id === parseInt(req.params.id));
    if(!slot) res.status(404).send(`The slot with given id :${req.params.id} was not found`);
    res.send(slot);

  });
  
  router.put("/:id", (req, res) => {
    res.send(req.params.id);
  });
  router.delete("/:id", (req, res) => {
    res.send(req.params.id);
  });


module.exports = router;