import { useState } from "react"

export default function UserLogin( props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toggleLogin = props.toggleLogin;
    const toggleSignup = props.toggleSignup;
    const handleSubmit = () => {

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
                <button className='button' type='submit'>Login</button>
                </div>
                <p>Not a member yet? <a href="#" onClick = {(e) => {handleToggle(e)}}>Sign up </a></p>
            </form>
        </div>
    )
}
