const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require('dotenv').config();
const cors = require("cors");
const User = require("./models/user");



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

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require apis
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const ownerRoutes = require("./routes/owner");
const userRoutes = require("./routes/auth")


app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);
app.use("/api", userRoutes)

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on PORT,3000");
    }
});