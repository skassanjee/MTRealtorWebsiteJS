const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const Routes = require('./routes/routes')
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').config()
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(Routes)


const db = process.env.MONGODB_URI
mongoose.connect(db)
.then( result => console.log("Connected to DB!"))
.catch(err => console.log(err))

const port = process.env.port || 3000
app.listen(port, () => {
    console.log('application is now running on port: ' + port)
})