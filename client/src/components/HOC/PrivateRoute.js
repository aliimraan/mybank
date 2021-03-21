import React from 'react'
import {Route} from 'react-router-dom'
import Login from '../container/Login'

function PrivateRoute({component,...rest}) {
    const token=localStorage.getItem('token')
    return (
        <div>
            <Route {...rest} component={token===null?Login:component}/>
        </div>
    )
}
export default PrivateRoute
