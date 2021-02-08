const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const User = require("./models/user");

dotenv.config();

const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb+srv://root:VhECxzpgo8CXGdN4@amazon-clone.eao6f.mongodb.net/amaz?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to the database.");
        }
    }
);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require apis
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on PORT,3000");
    }
});