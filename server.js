const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")
const userRoutes = require("./routes/UserRoutes")
const app= express();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected to mongo');
})
.catch((err)=>{
    console.log('error',err)
})

const port = process.env.port || 5000;

app.use("/api/user", userRoutes)

//static files
app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });


app.listen(port,()=>{console.log("Server started")} )