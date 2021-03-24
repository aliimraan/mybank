import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Dashboard from '../layout/Dashboard'
import Sidebar from '../UI/Sidebar'
import TableLists from '../UI/TableLists'
import Card from '../UI/Card'
import axios from 'axios'

function Home() {
    const [record,setRecord]= useState([])
    const [amount,setAmount]= useState([])
    useEffect(()=>{
        const id=localStorage.getItem('id')
        const token=localStorage.getItem('token')
        const config={
            headers:{jwt_react:token}
        }
        axios.get(`http://localhost:5000/api/users/one/user/${id}`,config).then(data=>{
            setRecord([data.data])
        }).catch(err=>console.log(err))
        axios.get(`http://localhost:5000/api/users/totalAmount/user/${id}`,config).then(data=>{
            setAmount(data.data)
        }).catch(err=>console.log(err))
    },[])
    const name=localStorage.getItem('name')
    const tags=[
        {icon:'./tran.svg',heading:'home',active:true,link:"/"},
        {icon:'./deposit.svg',heading:'deposite',link:"/deposite"},
        {icon:'./withdraw.svg',heading:'widthdraw',link:"widthdraw"}
    ]
    const transactionList={
        heading:['s.no','type','amount','date','status']
    }
    return (
        <div>
            <Dashboard sidebar={<Sidebar tags={tags}/>}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom px-md-4">
                    <h1 className="text-capitalize">welcome back , {name}</h1>
                </div>
               <Container>
                    <Card title={"current balance"} amount={amount[0]===[] || amount[0]===undefined?'':amount[0].totalAmount}/>
                    <TableLists data={transactionList} record={record[0]}/>
               </Container>
            </Dashboard> 
        </div>
    )
}

export default Home
