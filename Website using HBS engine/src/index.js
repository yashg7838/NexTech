let express = require("express")
let path = require("path")
let hbs = require("hbs")
let connectdb = require('../connection/connectdb.js')
const add = require("../model/model.js")
connectdb()

let app = new express()
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.set("view engine", "hbs")

app.set("views",path.join(__dirname, "../templates/views/"))
hbs.registerPartials(path.join(__dirname, "../templates/partials/"))

app.get("/home", (req,res)=>{
    res.render("home",{
        "name":"Join Now"
    })
})

app.get("/shop", (req,res)=>{
    res.render("shop",{
        "name":"Join Now"
    })
})

app.get("/contact", (req,res)=>{
    res.render("contact",{
        "name":"Join Now"
    })
})

app.get("/cart", (req,res)=>{
    res.render("cart",{
        "name":"Join Now"
    })
})

app.get("/join", (req,res)=>{
    res.render("join",{
        "name":"Join Now"
    })
})

app.post("/join", (req, res) => {
    let fname = req.body.lname
    let lname = req.body.email
    let email = req.body.passwd
    let pass = req.body.psw
    add(fname, lname, email, pass)
})

app.get("*", (req,res)=>{
    res.render("error",{
        "name":"Join Now"
    })
})

app.listen("3000", ()=>{
    console.log('connected to server...')
})