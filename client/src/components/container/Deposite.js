import React from 'react'
import { Container } from 'react-bootstrap'
import Dashboard from '../layout/Dashboard'
import Sidebar from '../UI/Sidebar'
import Account from '../layout/Account'

function Deposite() {
    const tags=[
        {icon:'./tran.svg',heading:'home',link:"/"},
        {icon:'./deposit.svg',heading:'deposite',link:"/deposite",active:true},
        {icon:'./withdraw.svg',heading:'widthdraw',link:"widthdraw"}
    ]
    const inputs=[
        {type:"text",placeholder:"enter amount",name:"depositeAmount"},
        {type:"text",placeholder:"enter password",name:"pass"},
      ]
    return (
        <div>
            <Dashboard sidebar={<Sidebar tags={tags}/>}>
                <Container>
                    <Account heading="enter the credentials to deposite money" submit="deposite" data={inputs} src="/b3.jpg" />
                </Container>
            </Dashboard> 
        </div>
    )
}

export default Deposite
