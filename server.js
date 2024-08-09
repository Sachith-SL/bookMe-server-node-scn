require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Connected to Database"));

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
  console.log(`Book Me app server is running on port : ${port}`);
});
