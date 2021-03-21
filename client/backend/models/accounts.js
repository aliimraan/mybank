const mongoose=require('mongoose')

const accountsScheme=new mongoose.Schema({
    customerId:{type:mongoose.Types.ObjectId,ref:'users'},
    transactions:[{
        type:{type:String},
        amount:{type:Number},
        time:{type:Date,default:Date.now}
    }],
    totalAmount:{type:Number,default:0}
},{timestamps:true})

const accountsModel=mongoose.model('accounts',accountsScheme)
module.exports=accountsModel