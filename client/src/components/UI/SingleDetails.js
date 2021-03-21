import React from 'react'
import {ListGroup} from 'react-bootstrap'
import Loader from './Loader'

function SingleDetails({record}) {
    const showData=(el)=>{
        console.log(el)
        if(el===[]||el===undefined){
            return <Loader/>
        }else{
            if(el.transactions.length==0){
                    return(
                        <ListGroup horizontal="lg" className="my-2" >
                            <ListGroup.Item>No transanctios</ListGroup.Item>
                        </ListGroup>
                        )
                }else{
                    return el.transactions.map((item,index)=>{
                        console.log(item)
                        return (
                            <ListGroup horizontal="lg" className="my-2" >
                                <ListGroup.Item>{++index}</ListGroup.Item>
                                <ListGroup.Item>Type: {item.type}</ListGroup.Item>
                                <ListGroup.Item>Amount: {item.amount} </ListGroup.Item>
                                <ListGroup.Item>Date: {(item.time).slice(0,10)}</ListGroup.Item>
                            </ListGroup>
                        )
                    })
                }
            
        }
    }
    return (
        <div className="singleDetails">
        {showData(record[0])}
        </div>
    )
}

export default SingleDetails
