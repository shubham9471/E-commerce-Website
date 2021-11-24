import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";
import {auth} from "../src/firebase"
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = event => {
        event.preventDefault(); // stops from refereshing

        //login logic
        auth.signInWithEmailAndPassword(email, password)
          .then((auth) => {
              //logged in and redirect to homepage...
              history.push('/');
          })

          .catch (e => alert(e.message));

    };

    const register = event => {
        event.preventDefault(); // stops from refereshing

        //register logic
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created a user and loggedin..., and redirect to homepage
            history.push('/');
        })

        .catch (e => alert(e.message));

    };
    return (
        <div className = "login">
            <Link to="/">
                <img className = "login_logo" src = "https://thumbs.dreamstime.com/b/e-commerce-2283014.jpg" alt = ""/>

            </Link>

            <div className = "login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value ={email} onChange = {event => setEmail(event.target.value)}type = "email"/>
                    <h5>Password</h5>
                    <input value = {password} onChange = {event => setPassword(event.target.value)} type = "password"/>
                    <button onClick = {login} type = "submit" className = "login_signButton">Sign In</button>

                </form>
                <p>
                    By signing-in you agree to our Website's Conditions of Use & Safe. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick = {register} className = "registerButton">Register and Create your Account</button>
                
            </div> 
            
        </div>
    )
}

export default Login;
