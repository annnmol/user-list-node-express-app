const dotenv = require("dotenv").config();
const express = require("express");
const uniqid = require("uniqid");
const cors = require("cors");
const router = require('./routes/indexRoutes')

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('', router)

app.listen(PORT, (err) => {
  if (err) console.warn(err);

  console.log(`Hello from server ${PORT}`);
});
