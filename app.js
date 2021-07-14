const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('./config/db');
const noteRoutes = require("./routes/notes");
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "DEV";
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
if(NODE_ENV === "DEV"){
    app.use(logger("dev"));
}

//routes
app.use("/api/notes", noteRoutes);

//server connection
app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT}`);
})
