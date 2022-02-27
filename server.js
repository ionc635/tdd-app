const express = require("express");

const PORT = 3000;
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://root:${process.env.MONGO_PASSWORD}@cluster0.t2otn.mongodb.net/${process.env.MONGO_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb Connected..."))
  .catch((err) => console.log(err));

app.use(express.json());

const productRoutes = require("./routes");
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT);

console.log(`Running on port ${PORT}`);
