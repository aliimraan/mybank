const mongoose=require('mongoose')

const usersScheme=new mongoose.Schema({
    firstName:{type:String,trim:true},
    lastName:{type:String,trim:true},
    mobileNumber:{type:String},
    email:{type:String},
    password:{type:String},
    cardNo:{type:String,trim:true},
    dob:{type:String},
    role:{type:String,default:'user'},
},{timestamps:true})

const usersModel=mongoose.model('users',usersScheme)
module.exports=usersModel