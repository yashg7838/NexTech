const mongoose = require('mongoose')

let schema= new mongoose.Schema(

    {
        First_name:{
            type:String,
            required:true
        },
        Last_name:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true 
        },
        password:{
            type:String,
            required:true
        }

    }
)
 
let user = new mongoose.model("user",schema)

let add = (fname, sname, eml, pass) => {
    let usr = new user(
        {
            First_name : fname,
            Last_name : sname,
            Email: eml,
            password: pass 
        }
    )
    usr.save()
}

module.exports = add