const {insertUser,findUser,oneCustomer,checkUser}=require('../models/users')
const {personalTrans,lastDeposite}=require('../models/accounts')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

exports.usersRegister=(req,res)=>{
    const {firstName,lastName,mobileNumber,email,pass,cardNo,dob,role}=req.body.allInputs
    parseInt(mobileNumber)
    bcrypt.hash(pass,10).then(hash=>{
        const password=hash
        insertUser({firstName,lastName,mobileNumber,email,password,cardNo,dob,role}).then(data=>{
            return res.status(200).json({data,msg:'Account created successfully'})
        }).catch(err=>{
            console.log(err)
            return res.status(400).json({err,msg:'creation failed'})
        })
    })   
}
exports.usersLogin=(req,res)=>{
    const {email,pass}=req.body.allInputs
    checkUser(email).then(data=>{
        if(data.length<=0){
            return res.status(401).json({msg:'Not registered user,Please register first'})
        }
        bcrypt.compare(pass,data[0].password).then(result=>{
            
            if(!result){
                return res.status(400).json({msg:"Wrong password"})
            }
            const token=jwt.sign({id:data._id},process.env.JWT_AUTH)
            return res.status(200).json({token,data,msg:"You are logged in"})
        }).catch(err=>console.log(err))

    }).catch(err=>{
        return res.status(500).json({err})
    })
}
exports.allUsers=(req,res)=>{
    findUser().then(data=>{
        return res.status(200).json(data)
    }).catch(err=>{
        return res.status(400).json(err)
    })
}

exports.oneUser=(req,res)=>{
    const id=req.params.id
    personalTrans(id).then(data=>{
        return res.status(200).json(data)
    }).catch(err=>{
        return res.status(400).json(err)
    })
}
exports.userTotal=(req,res)=>{
    const id=req.params.id
    lastDeposite(id).then(data=>{
        return res.status(200).json(data)
    }).catch(err=>{
        return res.status(400).json(err)
    })
}
