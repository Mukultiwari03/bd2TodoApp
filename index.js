const express = require("express")
const app = express();
// npm i nodemon---> like auto update no need to restart server

//  best practic ki load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());


// ijmport routes for TOD API;
const todoRoutes = require("./routes/todos")
// mount/add/append the todo API routes
app.use("/app/v1", todoRoutes);

   
// start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`)
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOMEPAGE <h1>`)
})