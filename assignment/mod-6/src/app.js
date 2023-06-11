const mongoose = require("mongoose")
const express = require("express")
const app = express()
const PORT = 9000;
const path = require("path")
const hbs = require("hbs")
const bodyparser = require("body-parser")
const cookieparser = require("cookie-parser")
 const DB_URL="mongodb://127.0.0.1:27017/webcrud"

mongoose.connect(DB_URL).then(() => {
    console.log("db connected....");
}).catch(err => {
    console.log(err);
})
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cookieparser())

const viewpath = path.join(__dirname, "../tempelates/views")
app.set("view engine", "hbs")
app.set("views", viewpath)

const userrouter = require("../router/userrouter");
app.use("/", userrouter)

app.listen(PORT, () => {
    console.log("server running on port : " + PORT);
})