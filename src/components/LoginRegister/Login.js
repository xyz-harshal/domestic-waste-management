import "./common.css";
import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    async function handleSubmit(event) {
        event.preventDefault()
        await login(username, password);
    }

    return (
        <div className="wrapper">
            <div className="circle-top circle"></div>
            <div className="circle-bottom circle"></div>
            <form onSubmit={handleSubmit} className="card">
                <div className="form_title_div">
                    <h1 className='form_title'>Login</h1>
                </div>

                <div className='desc_div'>
                    <p className='desc'>
                        Welcome back to the Waste Management Dashboard
                    </p>
                </div>

                <div className="email_div">
                    <label>Username: </label>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <button className='signupbtn' disabled={isLoading}>
                    Login
                </button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default Login;