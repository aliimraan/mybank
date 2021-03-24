import React from 'react'
import {Jumbotron,Container} from 'react-bootstrap'

function Card({title,amount}) {
  
    return (
        <div>
        <Jumbotron fluid style={{background:'#161616',color:'#fb2b76'}}>
        <Container className="d-flex justify-content-around align-items-center">
          <h3 className="text-uppercase" style={{fontWeight:'800',letterSpacing:'4px'}}>{title}</h3>
          <p style={{fontSize:'1.7rem',fontWeight:'800'}}>
            Rs {amount}
          </p>
        </Container>
        </Jumbotron>
        </div>
    )
}

export default Card
