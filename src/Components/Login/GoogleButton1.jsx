import React from 'react'
import GoogleButton from 'react-google-button'
import {auth,googleauthprovider} from '../../firebase/firebase'
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import useAuth from '../userHooks/useAuth';
import  Cookies  from 'js-cookie';
import { useNavigate } from 'react-router-dom';
export default function GoogleButton1() {
    const [loading, setLoading] = useState(false);
    const [loginfunction]=useAuth();
    const navigate=useNavigate()
    const handle = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, googleauthprovider);
            Cookies.set('usertoken',result.user.accessToken)
            loginfunction()
            navigate('/')
        } catch (err) {
            console.error("Error during sign-in:", err.message);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div>
            <GoogleButton onClick={handle} disabled={loading} />
            {loading && <p>Loading...</p>}
        </div>
    );
    
}
