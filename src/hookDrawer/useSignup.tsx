import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext();

    const signup = async (email: string, password: string, displayName: string) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email,password)
           

            if (!res) {
                throw new Error("could not complete signup")
            }

            // add display name to user
            await res.user?.updateProfile({displayName})

            // dispatch login action
            dispatch({type: 'LOGIN', payload: res.user})

            setIsPending(false)
            setError(null)
        }

        catch(err: Error | any) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }


    return {error, isPending, signup}
}