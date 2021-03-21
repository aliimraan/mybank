import React from 'react'
import './sidebar.css'
import {Link,useHistory} from 'react-router-dom'

function Sidebar({tags}) {
    const history=useHistory()
    const logoutHandler=()=>{
        localStorage.clear()
        history.push('/login')
    }
    const showElements=(el)=>{
        if(el===undefined){
            return 'loading'
        }
         return el.map((item,index)=>{
            const {icon,heading,active,link}=item
            return(
                <div className={active===true?"elements active":"elements"} key={index}>
                    <div className="icons">
                        <img src={icon}/>
                    </div>
                    <Link to={link} className="text-decoration-none">
                        <div className="heading">
                        <h3>{heading}</h3>
                        </div>
                    </Link>
                </div>
                )
        })
    }
    return (
        <div className="side_area">
            <div className="logo">
                <div className="pic">
                    <img src="/logo.svg"/>
                </div>
                <div className="heading">
                    apna bank
                </div>
            </div>
            <div className="all_elements">
                {showElements(tags)}
            </div>
            <div className="logout">
                <button onClick={()=>logoutHandler()}>logout</button>
            </div>
        </div>
    )
}

export default Sidebar
