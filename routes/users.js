const Joi = require("joi");
const express = require("express");
const { name } = require("ejs");
const router = express.Router();

// User(id,name,mobile,role)
const users = [
  { id: 1, name: "Sachith", mobile: "0765510800", role: "ADMIN" },
  { id: 2, name: "Nikith", mobile: "0712345678", role: "CUSTOMER" },
  { id: 3, name: "Sanju", mobile: "0723456789", role: "CUSTOMER" },
];

router.post("/", (req, res) => {
  const schema = Joi.object({
    mobile: Joi.string().pattern(new RegExp("^[0-9]{10}$")).required(),
    role: Joi.string().pattern(new RegExp("^(ADMIN|CUSTOMER)$")).required(),
    name: Joi.string().min(3).required(),
  });
  // const result = validateUser(req.body);
  const { error } = validateUser(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const user = {
    id: users.length + 1,
    name: req.body.name,
    mobile: req.body.mobile,
    role: req.body.role,
  };

  users.push(user);
  res.send(user);
});

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  console.log(`get user for ${req.params.id}`);
  // res.send(`no ${req.params.id} User details`);
  // res.send(req.query.sortBy);
  let user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user)
    res
      .status(404)
      .write(`The user with given id :${req.params.id} was not found`);
  res.send(user);
  res.end(user);
});

router.put("/:id", (req, res) => {
  //there is an issue with parseInt ex: 3a--> 3
  var user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user)
    return res
      .status(404)
      .send(`The user with given id :${req.params.id} was not found`);

  const { error } = validateUser(user);

  if (error) return res.status(400).send(error.details[0].message);

  user.name = req.body.name;
  user.mobile = req.body.mobile;
  user.role = req.body.role;

  res.send(user);
});

router.delete("/:id", (req, res) => {
  var user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user)
    return res
      .status(404)
      .send(`The user with given id :${req.params.id} was not found`);

  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

function validateUser(user) {
  const schema = Joi.object({
    mobile: Joi.string().pattern(new RegExp("^[0-9]{10}$")).required(),
    role: Joi.string().pattern(new RegExp("^(ADMIN|CUSTOMER)$")).required(),
    name: Joi.string().min(3).required(),
  });
  return schema.validate({
    name: user.name,
    mobile: user.mobile,
    role: user.role,
  });
}

module.exports = router;
