const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors"); //to add colours to the console
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const app = express();

//Mongoose connection to MongoDB
connectDB();

//Body parser middleware
app.use(express.json());

//bringing in router
const goals = require("./routes/goals");
const transactions = require("./routes/transactions");
const contributions = require("./routes/contributions");

//mounting the router
app.use("/api/v1/goals", goals);
app.use("/api/v1/transactions", transactions);
app.use("/api/v1/contributions", contributions);

//incorporating Morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//accessing port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
