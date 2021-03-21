import React from 'react'
import {Table} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


function TableLists({data,record}) {
  const history=useHistory()
    const showHeader=(el)=>{
        if(el===undefined){
            return 'loading'
        }
        return el.heading.map((item,index)=>{
          return (
            <th key={index} style={{textTransform:'capitalize'}}>{item}</th>
          )  
        })
    }
    const userHandler=(id)=>{
      history.push(`/single/user/${id}`)
    }

    const showData=(el)=>{
        if(el===[]||el===undefined){
            return 'loading'
        }
        if(el.transactions){
          return el.transactions.map((item,index)=>{
            return (
              <tr key={index} style={{textTransform:'capitalize'}}>
                <td>{++index}</td>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{(item.time).slice(0, 10)}</td>
                <td style={{color:'green',fontWeight:'800'}}>success</td>
              </tr>
            )  
          })
        }else{
          return el[0]===undefined?'':el[0].map((item,index)=>{
            return (
              <tr key={index} style={{textTransform:'capitalize'}} onClick={()=>userHandler(item._id)}>
                <td>{++index}</td>
                <td>{item.firstName}</td>
                <td>{item.cardNo}</td>
                <td>{(item.mobileNumber)}</td>
              </tr>
            )  
          })
        }
    }
    return (
        <div>
        <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            {showHeader(data)}
          </tr>
        </thead>
        <tbody>
          {showData(record)}
        </tbody>
      </Table>
        </div>
    )
}

export default TableLists
