import { useState } from "react";
import { useSignup } from "./hookDrawer/useSignup";

export default function UserSignup(props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const toggleLogin = props.toggleLogin;
    const toggleSignup = props.toggleSignup;
    const {signup, isPending, error} = useSignup();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        signup(email, password, username)
        
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
                {!isPending && <button className='button' type='submit'>Register</button>}
                {isPending && <button className='button' disabled>Loading</button>}
                </div>
                {error && <p>{error}</p>}
                <p>Already a member? <u><span className="userAction" onClick = {(e) => {handleToggle(e)}} >Login</span></u></p>
                
            </form>
        </div>
    )
}
