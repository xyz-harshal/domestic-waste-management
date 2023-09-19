import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async (username, password) => {
        setError(null);
        setIsloading(true);

        const response = await fetch('/login', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setIsloading(false);
        }
        if(response.ok){
             // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // update the auth context
            dispatch({type: 'LOGIN', payload: json});

            // update loading state
            setIsloading(false);
        }
    }

    return {login, isLoading, error};
}