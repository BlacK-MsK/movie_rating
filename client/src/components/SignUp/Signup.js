import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup(onSignUpSuccess) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onSubmitHandler(event) {
        event.preventDefault();
        const user = {username, email, password}
        const response = await axios.post("https://localhost:9000/signUp", user);
        const token = response.data.token;
        localStorage.setItem("token", token);
        onSignUpSuccess();
    }

    function onUsernameChange(event) {
        setUsername(event.target.value);
    }

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }
    
    return (
        <div className="Signup">
            <div className="box">
                <form className="form" onSubmit={onSubmitHandler}>
                    <h2>Welcome!!!</h2>
                    <div className="inputBox">
                        <span>Username</span>
                        <input name="username" type="text" value={email} onChange={onUsernameChange} required="required" />
                        <i></i>
                    </div>
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
                        <a href="/">Log In?</a>
                    </div>
                    <a href="/"><button name="SignupSubmitButton" type="submit">Sign Up</button></a>
                </form>
            </div>
        </div>
    )
}

export default Signup;