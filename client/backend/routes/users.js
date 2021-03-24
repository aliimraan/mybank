const express=require('express')
const router=express.Router()
const {usersRegister,usersLogin,allUsers,oneUser,userTotal}=require('../controllers/users')
const {authenticate}=require('../commonMiddlewares')
const { signUpRequestValidator ,signUpRequestValidatorResult,loginRequestValidator,loginRequestValidatorResult} = require('../validators')

router.post('/register',signUpRequestValidator,signUpRequestValidatorResult,usersRegister)
router.post('/login',loginRequestValidator,loginRequestValidatorResult,usersLogin)
router.get('/allUsers', authenticate,allUsers)
router.get('/one/user/:id',oneUser)
router.get('/totalAmount/user/:id',userTotal)

module.exports=router
