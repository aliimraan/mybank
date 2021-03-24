const express=require('express')
const router=express.Router()
const {depositeAmount,widthdrawAmount}=require('../controllers/accounts')
const {authenticate}=require('../commonMiddlewares')
const {depositeRequestValidator,depositeRequestValidatorResult, widthdrawRequestValidator ,widthdrawRequestValidatorResult} = require('../validators')

router.post('/deposite/:id', authenticate,depositeRequestValidator ,depositeRequestValidatorResult,depositeAmount)
router.post('/widthdraw/:id', authenticate,widthdrawRequestValidator ,widthdrawRequestValidatorResult,widthdrawAmount)




module.exports=router