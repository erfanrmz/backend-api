const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

//load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();

//Body parsing
app.use(express.json());

//Enable CORS
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
