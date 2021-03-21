const accountsModel=require('../models/accounts')
const usersModel=require('../models/users')
const bcrypt=require('bcrypt')

exports.depositeAmount=(req,res)=>{
    const userId=req.user.id
    const {depositeAmount,pass}=req.body.allInputs
    accountsModel.findOne({customerId:userId}).then(data=>{
        console.log(data)
        if(!data){
            return res.status(401).json({msg:'Not valid user'})
        }
        usersModel.find({_id:userId}).then(record=>{
            bcrypt.compare(pass,record[0].password).then(result=>{
                if(!result){
                    return res.status(400).json({msg:"Wrong password"})
                }
                   let initialAmount=data.totalAmount
                   const newAmount=(initialAmount+parseInt(depositeAmount))
                   accountsModel.findOneAndUpdate({customerId:userId,
                    "$push":{
                        transactions:[{
                            type:"deposite",
                            amount:depositeAmount,
                        }],
                    },
                    totalAmount:newAmount
                }).then(added=>{
                    return res.status(200).json({msg:'amount deposited'})
                }).catch(err=>{
                    return res.status(400).json({msg:'failed ,try again later'})
                })
               
            }).catch(err=>console.log(err))
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        return res.status(500).json({err})
    })
}
exports.widthdrawAmount=(req,res)=>{
    const userId=req.user.id
    const {widthdrawAmount,pass}=req.body.allInputs
    accountsModel.findOne({customerId:userId}).then(data=>{
        console.log(data)
        if(!data){
            return res.status(401).json({msg:'Not valid user'})
        }
        usersModel.find({_id:userId}).then(record=>{
            bcrypt.compare(pass,record[0].password).then(result=>{
                if(!result){
                    return res.status(400).json({msg:"Wrong password"})
                }
                   let initialAmount=data.totalAmount
                   if(initialAmount<widthdrawAmount){
                       return res.status(400).json({msg:"Not Sufficient Fund"})
                   }else{
                    const newAmount=(initialAmount-parseInt(widthdrawAmount))
                    accountsModel.findOneAndUpdate({customerId:userId,
                     "$push":{
                         transactions:[{
                             type:"widthdraw",
                             amount:widthdrawAmount,
                         }],
                     },
                     totalAmount:newAmount
                 }).then(added=>{
                     return res.status(200).json({msg:'Amount Widthdrawl Successfully'})
                 }).catch(err=>{
                     return res.status(400).json({msg:'failed ,try again later'})
                 })
                   }
            }).catch(err=>console.log(err))
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        return res.status(500).json({err})
    })
}
exports.totalAmount=(req,res)=>{
    accountsModel.find().then(data=>{
        return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
    })
}