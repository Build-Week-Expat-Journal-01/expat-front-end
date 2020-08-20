import {Route,Redirect} from 'react-router-dom'
import React, { Component } from 'react'

const PrivateRoute = ({component:Component, ...rest}) =>{
    return(
        <Route
        {...rest}
        render={props =>
            localStorage.getItem('token')?(
                <Component {...props}/>):(
                    <Redirect to='/login'/>
                 )                
            }
        ></Route>
    )
}

export default PrivateRoute