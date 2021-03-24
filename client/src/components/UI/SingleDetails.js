import React from 'react'
import {ListGroup} from 'react-bootstrap'
import Loader from './Loader'

function SingleDetails({record}) {
    const showData=(el)=>{
        
        if(el===[]||el===undefined){
            return <Loader/>
        }else{
            if(el.length==0){
                    return(
                        <ListGroup horizontal="lg" className="my-2" >
                            <ListGroup.Item>No transanctios</ListGroup.Item>
                        </ListGroup>
                        )
                }else{
                    return el.map((item,index)=>{
                    
                        return (
                            <ListGroup horizontal="lg" className="my-2" >
                                <ListGroup.Item>{++index}</ListGroup.Item>
                                <ListGroup.Item>Type: {item.type}</ListGroup.Item>
                                <ListGroup.Item>Amount: {item.amount} </ListGroup.Item>
                                <ListGroup.Item>Total Amount: {item.totalAmount} </ListGroup.Item>
                                <ListGroup.Item>Date: {(item.true).slice(0,10)}</ListGroup.Item>
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
