import React,{useEffect,useState} from 'react'
import axios from 'axios'
import SingleDetails from '../UI/SingleDetails'

function PersonalData(props) {
    const [record,setRecord]= useState([])
    useEffect(() => {
        const id=props.match.params.id
        console.log(id)
       axios.get(`http://localhost:5000/api/users/one/user/${id}`).then(data=>{
           setRecord([data.data])
       }).catch(err=>console.log(err))
    }, [])
    return (
        <div>
            <SingleDetails record={record}/>
        </div>
    )
}

export default PersonalData
