const db=require('../db/knex')

exports.insertUser=async(data)=>{
    const result= await db('users').insert(data)
    return result
}
exports.checkUser=async(email)=>{
    const result= await db('users').where({
        email: email
 })
    return result
}
exports.oneCustomer=async(id)=>{
    const result= await db('users').where({
        id: id
      })
    return result
}
exports.findUser=async()=>{
    return await db('users').where('role','user')
}