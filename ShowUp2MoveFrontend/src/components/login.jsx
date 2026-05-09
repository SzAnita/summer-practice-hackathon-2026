import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import '../assets/form.css';
import {NavLink, useNavigate} from "react-router-dom";
import CSRFToken from "./csrftoken.jsx";

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function handleLogin(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pwd = form.password.value;
        fetch('http://localhost:8000/showup2move/login', {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken':getCookie('csrftoken')
            },
            body: JSON.stringify({'email':email, 'password':pwd}),
        })
            .then(response => response.json())
            .then(response => {
                if(response.status === 200) {
                    localStorage.setItem('token', response.data.token)
                    navigate('showup2move/', {replace: true})
                } else {
                    setError(prevError => response.data.message)
                }
            });
    }

    return(
            <div className={"content"}>
                <form onSubmit={handleLogin}>
                    <legend>Log in</legend>
                    <label htmlFor={"email"}></label>
                    <input type={"email"} id={"email"} name={"email"} placeholder={"Email"} required={true}/><br/>
                    <label htmlFor={"password"}></label>
                    <input type={"password"} id={"password"} name={"password"} placeholder={"Password"} required={true}/><br/>
                    <CSRFToken/>
                    <Button variant={"primary"} type={"submit"}>Submit</Button>
                    <p className={"error"}>{error}</p>
                    <p>Don't have an account yet? Sign up <NavLink to={"../showup2move/signup"}>here</NavLink>!</p>
                </form>
            </div>

    )
}
export default Login