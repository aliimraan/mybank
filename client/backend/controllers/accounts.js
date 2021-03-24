const {oneCustomer}=require('../models/users')
const {deposite,lastDeposite,widthdrawl}=require('../models/accounts')
const bcrypt=require('bcrypt')

exports.depositeAmount=(req,res)=>{
    const userId=req.params.id
    const {depositeAmount,pass}=req.body.allInputs
    oneCustomer(userId).then(record=>{
        if(record.length<=0){
            return res.status(401).json({msg:'Not valid user'})
        }
        bcrypt.compare(pass,record[0].password).then(result=>{
            if(!result){
                return res.status(400).json({msg:"Wrong password"})
                }  
            lastDeposite(userId).then(data=>{
                if(data.length<=0){
                    deposite(depositeAmount,userId,depositeAmount).then(data=>{
                        if(data){
                            return res.status(200).json({msg:"Amaount deposited"})
                        }
                    }).catch(err=>{
                        return res.status(400).json({msg:"Transaction failed,please try again later"})
                    })
                }else{
                    const total=data[0].totalAmount+parseInt(depositeAmount)
                deposite(depositeAmount,userId,total).then(data=>{
                    if(data){
                        return res.status(200).json({msg:"amount deposited"})
                    }
                }).catch(err=>{
                    return res.status(400).json({msg:"not deposited"})
                })
                }
                
            }).catch(err=>console.log(err))
                
        }).catch(err=>{
            console.log(err)
        })
    })
}
exports.widthdrawAmount=(req,res)=>{
    const userId=req.params.id
    const {widthdrawAmount,pass}=req.body.allInputs
    oneCustomer(userId).then(record=>{
        if(record.length<=0){
            return res.status(401).json({msg:'Not valid user'})
        }
        bcrypt.compare(pass,record[0].password).then(result=>{
            if(!result){
                return res.status(400).json({msg:"Wrong password"})
                }  
            lastDeposite(userId).then(data=>{
                if(data.length<=0){
                    return res.status(400).json({msg:"deposite money to widthdrawl"})
                }else{
                    if(data[0].totalAmount<parseInt(widthdrawAmount)){
                        return res.status(400).json({msg:"No sufficient Fund"})
                    }else{
                        const total=data[0].totalAmount-parseInt(widthdrawAmount)
                        widthdrawl(widthdrawAmount,userId,total).then(data=>{
                    if(data){
                        return res.status(200).json({msg:"Amount widthdrawl"})
                    }
                }).catch(err=>{
                    return res.status(400).json({msg:"something went wrong"})
                })
                    }
                    
                }
            }).catch(err=>console.log(err))
                
        }).catch(err=>{
            console.log(err)
        })
    })
}