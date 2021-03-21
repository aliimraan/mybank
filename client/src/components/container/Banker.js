import React,{useState,useEffect}  from 'react'
import { Container } from 'react-bootstrap'
import Dashboard from '../layout/Dashboard'
import Sidebar from '../UI/Sidebar'
import TableLists from '../UI/TableLists'
import axios from 'axios'
import Card from '../UI/Card'

function Banker() {
     const [record,setRecord]= useState([])
     const [total,setTotal]= useState('')
     var sum=0;
    useEffect(()=>{
        const id=localStorage.getItem('id')
        const token=localStorage.getItem('token')
        const config={
            headers:{jwt_react:token}
        }
        axios.get('http://localhost:5000/api/users/allUsers',config).then(data=>{
            setRecord([data.data])
        }).catch(err=>console.log(err))

       
        axios.get('http://localhost:5000/account/totalAmount',config).then(data=>{
           data.data.data.find((item,index)=>{
               console.log(item.totalAmount)
               sum+=item.totalAmount
               console.log(sum)
               setTotal(sum)
            })
         }).catch(err=>console.log(err))
        
    },[])
    const tags=[
        {icon:'./tran.svg',heading:'home',active:true},
       
    ]
    const transactionList={
        heading:['s.no','customer name','card number','mobile number']
    }
    return (
        <div>
        <Dashboard sidebar={<Sidebar tags={tags}/>}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom px-md-4">
                <h1>welcome back</h1>
            </div>
           <Container>
                <div className="balance_card">
                    <Card title="Total Amount" amount={total}/>
                </div>
                <TableLists data={transactionList} record={record}/>
           </Container>
        </Dashboard> 
    </div>
    )
}

export default Banker
