import React from 'react'
import { SignupForm } from './SignupForm'
import { LoginForm } from './LoginForm'
import "./Template.css"
export const Template = ({title,formtype,setIsLoggedIn}) => {
  return (
    <div className='wrapper'>
{/* circles animation */}
        <div class="circle-top circle"></div>
        <div class="circle-bottom circle"></div>
        
        {/* card starts here */}
        <div >
            {/* form */}
            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn= {setIsLoggedIn} title={title}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn} title={title}/>)
        }
        </div>
        {/* card ends here */}
    </div>
  )
}
