const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "world" });
  // res.status(404).json({ statusCode: "404", message: "Page Not Found" });
  // res.send('Hello World!')
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
