const express = require("express");
// const dotenv = require('dotenv');
const app = express();

// dotenv.config;

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

const homeRouter = require("./routes/home");
const userRouter = require("./routes/users");
const reservationsRouter = require("./routes/reservations");
const slotsRouter = require("./routes/slots");

app.use(express.json());

app.use("/", homeRouter);
app.use("/api", homeRouter);
app.use("/api/users", userRouter);
app.use("/api/reservations", reservationsRouter);
app.use("/api/slots", slotsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
