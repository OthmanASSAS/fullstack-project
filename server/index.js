const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./route.js");
const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.baseURL,{ useNewUrlParser: true });
mongoose.connection
    .once("open", () => console.log("connecté à mongodb :)"))
    .on("error", error => console.log("Erreur de connexion à MongoDB:", error));

app.use(bodyParser.json({ type: "*/*" }));
router(app);

app.listen(3090);
