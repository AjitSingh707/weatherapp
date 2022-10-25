const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const port = process.env.PORT || 8000

//app.use(express.static(staticpath)) is used for registring public folder
const staticpath = path.join(__dirname,"../public")
app.use(express.static(staticpath))
//  setting view engine
app.set("views","D:/weatherApp/express/templates/views")
app.set("view engine","hbs")
// registring partials and giving partials folder path
hbs.registerPartials("D:/weatherApp/express/templates/partials")
//routing all files----------------------
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/temp",(req,res)=>{
    
    res.render("weather")
}) 
app.get("*",(req,res)=>{
    res.render("404err")
})

//listening------------------
app.listen(port,()=>{
    console.log(`listening at ${port} .......`)
})