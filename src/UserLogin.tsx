import { useState } from "react"
import { useLogin } from "./hookDrawer/useLogin";

export default function UserLogin( props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toggleLogin = props.toggleLogin;
    const toggleSignup = props.toggleSignup;
    const {login, error, isPending} = useLogin();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        login(email,password)
    }

    const handleToggle = (e: any) => {
        e.preventDefault();
        toggleSignup(true)
        toggleLogin(false);
    }
    
    return (
        <div >
            <h1>Login</h1>
            <form className="add-book" onSubmit = {handleSubmit}>
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
                {!isPending && <button className='button' type='submit'>Login</button>}
                {isPending && <button className='button' disabled>Loading</button>}
                
                </div>
                {error && <p>{error}</p>}
                <p>Not a member yet? <u><span className="userAction"  onClick = {(e) => {handleToggle(e)}}>Sign up </span></u></p>
            </form>
        </div>
    )
}
