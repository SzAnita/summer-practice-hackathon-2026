import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import '../assets/form.css';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [description, setDescription] = useState('');
    const [sport1, setSport1] = useState('Football');
    const [sport2, setSport2] = useState('None');
    const [sport3, setSport3] = useState('None');
    const [skill1, setSkill1] = useState('Beginner');
    const [skill2, setSkill2] = useState('None');
    const [skill3, setSkill3] = useState('None');
    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }

    function handleSport1Change(event) {
        setSport1(event.target.value)
    }

    function handleSport2Change(event) {
        setSport2(event.target.value)
    }

    function handleSport3Change(event) {
        setSport3(event.target.value)
    }

    function handleSkill1Change(event) {
        setSkill1(event.target.value)
    }

    function handleSkill2Change(event) {
        setSkill2(event.target.value)
    }

    function handleSkill3Change(event) {
        setSkill3(event.target.value)
    }
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

    function handleSignUp(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pwd = form.password.value;
        const firstName = form.password.value;
        const lastName = form.password.value;
        const userName = form.userName.value;
        const description = form.description.value;
        const sport1 = form.sport1.value;
        const skill1 = form.skill1.value;
        alert(pwd);
        fetch('http://localhost:8000/showup2move/signup', {
            method: 'POST',
            mode: 'cors',
            headers: {

                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({
                'email':email,
                'password':pwd,
                'first_name': firstName,
                'last_name': lastName,
                'user_name': userName,
                'description': description,
                'sport1': sport1,
                'skill1': skill1
            }),
        })
            .then(response => response.json())
            .then(response => {
                if(response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    navigate('showup2move/', {replace: true})
                } else {
                    setError(prevError => response.data.message)
                }
            });
    }

    return(
            <div className={"content"}>
                <form onSubmit={handleSignUp}>
                    <fieldset>
                    <legend>Sign Up</legend>
                    <label htmlFor={"email"}></label>
                    <input type={"email"} id={"email"} name={"email"} placeholder={"Email"} required={true}/>
                    <label htmlFor={"password"}></label>
                    <input type={"password"} id={"password"} name={"password"} placeholder={"Password"} required={true}/>
                    <span>
                        <label htmlFor={"firstName"}></label>
                        <input type={"text"} id={"firstName"} name={"firstName"} placeholder={"First Name"} required={true}/>
                    </span>
                    <span>
                        <label htmlFor={"lastName"}></label>
                        <input type={"text"} id={"lastName"} name={"lastName"} placeholder={"Last Name"} required={true}/>
                    </span>
                    <label htmlFor={"userName"}></label>
                    <input type={"text"} id={"userName"} name={"userName"} placeholder={"User Name"}/>
                    <label htmlFor={"description"}></label>
                    <textarea id={"description"} name={"description"} placeholder={"Description"} rows={4} cols={50} maxLength={400} value={description} onChange={handleDescriptionChange}/>

                    <label htmlFor={"sport1"}></label>
                    <select id={"sport1"} name={"sport1"} value={sport1} onChange={handleSport1Change}>
                        <option value={"Football"}>Football</option>
                        <option value={"Tennis"}>Tennis</option>
                        <option value={"Baseball"}>Baseball</option>
                        <option value={"Basketball"}>Basketball</option>
                        <option value={"Hockey"}>Hockey</option>
                        <option value={"Volleyball"}>Volleyball</option>
                    </select>
                    <label htmlFor={"skill1"}></label>
                    <select id={"skill1"} name={"skill1"} value={skill1} onChange={handleSkill1Change}>
                        <option value={"Beginner"}>Beginner</option>
                        <option value={"Intermediate"}>Intermediate</option>
                        <option value={"Advanced"}>Advanced</option>
                        <option value={"Expert"}>Expert</option>
                    </select>
                    <label htmlFor={"sport2"}></label>
                    <select id={"sport2"} name={"sport2"} value={sport2} onChange={handleSport2Change}>
                        <option value={"None"}>--Select sport</option>
                        <option value={"Football"}>Football</option>
                        <option value={"Tennis"}>Tennis</option>
                        <option value={"Baseball"}>Baseball</option>
                        <option value={"Basketball"}>Basketball</option>
                        <option value={"Hockey"}>Hockey</option>
                        <option value={"Volleyball"}>Volleyball</option>
                    </select>
                    <label htmlFor={"skill2"}></label>
                    <select id={"skill2"} name={"skill2"} value={skill2} onChange={handleSkill2Change}>
                        <option value={"None"}>--Select Skill</option>
                        <option value={"Beginner"}>Beginner</option>
                        <option value={"Intermediate"}>Intermediate</option>
                        <option value={"Advanced"}>Advanced</option>
                        <option value={"Expert"}>Expert</option>
                    </select>
                    <label htmlFor={"sport3"}></label>
                    <select id={"sport3"} name={"sport3"} value={sport3} onChange={handleSport3Change}>
                        <option value={"None"}>--Select sport</option>
                        <option value={"Football"}>Football</option>
                        <option value={"Tennis"}>Tennis</option>
                        <option value={"Baseball"}>Baseball</option>
                        <option value={"Basketball"}>Basketball</option>
                        <option value={"Hockey"}>Hockey</option>
                        <option value={"Volleyball"}>Volleyball</option>
                    </select>
                    <label htmlFor={"skill3"}></label>
                    <select id={"skill3"} name={"skill3"} value={skill3} onChange={handleSkill3Change}>
                        <option value={"None"}>--Select Skill</option>
                        <option value={"Beginner"}>Beginner</option>
                        <option value={"Intermediate"}>Intermediate</option>
                        <option value={"Advanced"}>Advanced</option>
                        <option value={"Expert"}>Expert</option>
                    </select>

                    <Button variant={"primary"} type={"submit"}>Submit</Button>
                    <p className={"error"}>{error}</p>
                    </fieldset>
                </form>
            </div>

    )
}
export default SignUp