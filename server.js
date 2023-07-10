const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");

//load env variables
dotenv.config({ path: "./config/config.env" });

const app = express();
connectDB();

//Body parsing
app.use(express.json());

//Enable CORS
app.use(cors());

//routes
app.use("/create-partner", require("./routes/createPartner"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
