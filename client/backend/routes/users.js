const express=require('express')
const router=express.Router()
const {usersRegister,usersLogin,allUsers,oneUser}=require('../controllers/users')
const {authenticate}=require('../commonMiddlewares')
const { signUpRequestValidator ,signUpRequestValidatorResult,loginRequestValidator,loginRequestValidatorResult} = require('../validators')

router.post('/register',signUpRequestValidator,signUpRequestValidatorResult,usersRegister)
router.post('/login',loginRequestValidator,loginRequestValidatorResult,usersLogin)
router.get('/allUsers', authenticate,allUsers)
router.get('/one/user/:id',oneUser)

module.exports=router
