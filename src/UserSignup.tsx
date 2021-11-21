import { useState } from "react";

export default function UserSignup(props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const toggleLogin = props.toggleLogin;
    const toggleSignup = props.toggleSignup;

    const handleSubmit = () => {
        
    }

    const handleToggle = (e: any) => {
        e.preventDefault();
        toggleSignup(false)
        toggleLogin(true);
    }


    return (
        <div>
            <h1>Register</h1>
            <form className="add-book" onSubmit = {handleSubmit}>
            <label >username:</label>
                <input 
                    type="text" 
                    onChange = {(e) => {setUsername(e.target.value)}}
                />
                
                <label >email:</label>
                <input 
                    type="email" 
                    onChange = {(e) => {setEmail(e.target.value)}}
                />
               
                <label >password:</label>
                <input 
                    type="password"
                    onChange = {(e) => {setPassword(e.target.value)}}
                />
                
                <div className="form-buttons">
                <button className='button' type='submit'>Register</button>
                </div>
                <p>Already a member? <a onClick = {(e) => {handleToggle(e)}} href="#">Login</a></p>
            </form>
        </div>
    )
}
