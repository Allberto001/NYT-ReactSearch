const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT= process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(routes);

//connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reacttreadinglist");

//start the API server
app.listen(PORT, function(){
   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});
