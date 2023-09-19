import React from 'react'
import { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


export const LoginForm = ({setIsLoggedIn, title}) => {

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    // starting mai no password showed
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => {
            return (
                {
                    ...prevData ,
                    [event.target.name] : event.target.value
                }
            )
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        //when you have signed in we have to set iLoggedIn as 'true'
        setIsLoggedIn(true);
        toast.success("Logged In!");
    }
  return (
    <div className='card'>
          {/* title of page */}
        <div className="form_title_div">
            <h1 className='form_title'>Login</h1>
        </div>
       
    
        {/* description */}
        <div className='desc_div'>
            <p className='desc'>
                {title}
            </p>
        </div>

        <form onSubmit={submitHandler}>
            {/* email */}
            <div className='email_div2'>
                <label>
                    <p>
                        Email Address<sup>*</sup>
                    </p>

                    <input type="email"
                    required
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"
                    id='email'
                    placeholder='Enter email id..'
                    />
                </label>
            </div>
            

            {/* password */}
            <label>
                <p>
                    Password<sup>*</sup>
                </p>
                <div className="input_container">
                    <input 
                    required
                    type= {showPassword ? ("text") : ("password")}
                    value = {formData.password}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter password">
                    </input>

                    <span onClick={ () => setShowPassword( (prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                    </span>
                </div>
            </label>   

{/* button for logging in */}
                <Link to="/login">
                    <button className='loginbtn'>
                        Login
                    </button>
                </Link>

                <div className='registration_link'>
                    <p>Click here to register..</p>

                    <Link to="/signup" >
                        <p className='link_tag'>
                            Signup
                        </p>
                    </Link>
                </div>
        </form>
        
    </div>
  )
}
