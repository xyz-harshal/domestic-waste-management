import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./SignupForm.css"

export const SignupForm = ({setIsLoggedIn, title}) => {

    const[formData, setFormData] = useState( {
        email:"",
        password:"",
        confirmPassword:""
    })

    const[showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    
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
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!!");
            return;
        }
        // if both passwords match then user has created an account
        // so he can login now
        setIsLoggedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        };
        console.log("printing account data");
        console.log(accountData);
    }
  return (
    <div className='card'>
        <div className="form_title_div">
            <h1 className='form_title'>Signup</h1>
        </div>
         {/* title of page */}
        
        {/* description */}
        <div className='desc_div'>
            <p className='desc'>
                {title}
            </p>
        </div>
        {/* form for signup */}
        <form onSubmit={submitHandler}>

            <div className='email_div'>
            <label className=''>
                <p>Email Address<sup>*</sup></p>

                <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value= {formData.email}>
                </input>
            </label>
            </div>
            
            
            {/* createPassword and confirm password */}
            <div>

                <label>
                    <p>Create Password<sup>*</sup></p>

                    <div className='input_container'>
                        <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value= {formData.password}>
                        </input>

                        <span onClick={ () => setShowPassword( (prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                        </span>
                    </div>
                    
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>

                    <div className='input_container'>
                        <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value= {formData.confirmPassword}
                        
                        />

                        <span onClick={ () => setShowConfirmPassword( (prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                        </span>
                    </div>
                    
                </label>

            </div>

            <Link to="/signup">
                <button className='signupbtn'>
                    Signup
                </button>
            </Link>

            <div className='registration_link'>
                <p>If you already have an account click here..</p>

                <Link to="/login">
                    <p className='link_tag'>Login</p>
                </Link>
            </div>


        </form>
    </div>
  )

}
