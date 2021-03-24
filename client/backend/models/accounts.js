const db=require('../db/knex')

exports.bycardNo=async(number)=>{
    const result= await db('accounts').where({
        c_cardNo:number
    })
    return result
}
exports.deposite=async(amount,userId,total)=>{
    return await db('accounts').insert({
        amount:amount,
        type:'deposite',
        c_id:userId,
        totalAmount:total
    })
}
exports.widthdrawl=async(amount,userId,total)=>{
    return await db('accounts').insert({
        amount:amount,
        type:'widthdraw',
        c_id:userId,
        totalAmount:total
    })
}
exports.personalTrans=async(c_id)=>{
    return await db('accounts').where('c_id',c_id)
}
exports.lastDeposite=async(userId)=>{
    return await db('accounts').where('c_id',userId).orderBy('id','DESC').limit(1)
}
