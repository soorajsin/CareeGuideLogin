const mongoose = require("mongoose");

const url =
  "mongodb+srv://soorajsingh7505:sooraj231@crud-app.4oebebt.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database connected ...");
  })
  .catch((error) => {
    console.log("Database not connected ...");
  });
