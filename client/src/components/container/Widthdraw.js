import React from 'react'
import Dashboard from '../layout/Dashboard'
import Sidebar from '../UI/Sidebar'
import Account from '../layout/Account'
import {Container} from 'react-bootstrap'

function Widthdraw() {
    const tags=[
        {icon:'./tran.svg',heading:'home',link:"/"},
        {icon:'./deposit.svg',heading:'deposite',link:"/deposite"},
        {icon:'./withdraw.svg',heading:'widthdraw',link:"widthdraw",active:true}
    ]
    const inputs=[
        {type:"text",placeholder:"enter amount",name:"widthdrawAmount"},
        {type:"text",placeholder:"enter password",name:"pass"},
      ]
    return (
            <Dashboard sidebar={<Sidebar tags={tags}/>}>
                <Container>
                    <Account heading="enter the credentials to widthdraw money" submit="widthdraw" data={inputs} src="/b4.jpg" />
                </Container>
            </Dashboard>
    )
}

export default Widthdraw
