const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const routes = require("./routes")

const app = express();

// middleware for dealing with json data from requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//routes to use
app.use(routes);

// mongo connect
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

app.listen(PORT, function(){
    console.log(`connected on ${PORT}`);
});