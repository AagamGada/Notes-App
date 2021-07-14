const mongoose = require('mongoose');
const keys = require("./keys");
require("dotenv").config();

async function dbConnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        console.log("DB Connected");
    }
    catch(err){
        console.log("DB failed to connect");
    }
}

dbConnect();