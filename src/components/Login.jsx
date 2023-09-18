import React from 'react'
import { Template } from './Template'

 const Login = ({setIsLoggedIn}) => {
  return (
    <Template
        title = "Welcome back to the Waste Management Dashboard"
        formtype = "login"
        setIsLoggedIn = {setIsLoggedIn}
    />
  )
}
export default Login
