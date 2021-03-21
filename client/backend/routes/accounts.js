const express=require('express')
const router=express.Router()
const {depositeAmount,widthdrawAmount,totalAmount}=require('../controllers/accounts')
const {authenticate}=require('../commonMiddlewares')
const {depositeRequestValidator,depositeRequestValidatorResult, widthdrawRequestValidator ,widthdrawRequestValidatorResult} = require('../validators')

router.post('/deposite', authenticate,depositeRequestValidator ,depositeRequestValidatorResult,depositeAmount)
router.post('/widthdraw', authenticate,widthdrawRequestValidator ,widthdrawRequestValidatorResult,widthdrawAmount)
router.get('/totalAmount', authenticate,totalAmount)




module.exports=router