import React, { useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext();
    const [isCancelled, setIsCancelled] = useState(false)

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


            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
            
        }

        catch(err: Error | any) {
            if (!isCancelled) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return() => {
            setIsCancelled(true)
        }
    }, [])

    return {error, isPending, signup}
}