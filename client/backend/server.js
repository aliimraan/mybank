const express =require('express');
const app=express();
const env=require('dotenv')
const bodyParser=require('body-parser');
const cors=require('cors')
const userRouter=require('./routes/users')
const accountRouter=require('./routes/accounts')



app.get('/',(req,res)=>{
    return res.status(200).json({'msg':'hello from node'})
 })

app.use(cors())
app.use(bodyParser.json())
app.use('/api/users',userRouter)
app.use('/account',accountRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server listening on ${process.env.PORT}`)
})


