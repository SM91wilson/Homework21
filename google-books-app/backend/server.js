const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

app.listen(PORT, function(){
    console.log(`connected on ${PORT}`);
});