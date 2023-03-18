import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login({onSuccessfulLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onSubmitHandler(event) {
        event.preventDefault();
        const user = {email, password}
        const response = await axios.post("https://localhost:9000/signUp", user);
        const token = response.data.token;
        localStorage.setItem("token", token);
        if(token){
            localStorage.setItem("token", token);
            onSuccessfulLogin();
        }
        console.log(token);
    }

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }
    
    return (
        <div className="Login">
            <div className="box">
                <form className="form" onSubmit={onSubmitHandler}>
                    <h2>Welcome Back!!</h2>
                    <div className="inputBox">
                        <span>Email</span>
                        <input name="Email" type="email" value={email} onChange={onEmailChange} required="required" />
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <span>Password</span>
                        <input name="Password" type="password" value={password} onChange={onPasswordChange} required="required" />
                        <i></i>
                    </div>
                    <div className="links">
                        <a href="/">Sign Up?</a>
                    </div>
                    <a href="/"><button name="LoginSubmitButton" type="submit">Log In</button></a>
                </form>
            </div>
        </div>
    )
}

export default Login;