const express = require("express"),
        morgan = require("morgan"),        
        bodyParser = require("body-parser"),
        mongoose = require("mongoose")
        

const app = express();
app.set("port", process.env.PORT || 3000);

//middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended: true}));


//mongodb+srv://admin:7CnGvvptSLJU4gi@cluster0.ldxvq.azure.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://admin:7CnGvvptSLJU4gi@cluster0.ldxvq.azure.mongodb.net/almuerzi_db?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})

//routes
app.use("/api", require("./routes/app"));

app.listen(app.get("port"), () =>{
    console.log(`Server on Port: test  http://localhost:${app.get("port")}`, app.get("port"))
})

