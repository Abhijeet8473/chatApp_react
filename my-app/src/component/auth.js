// making the auth page for google authentication

import {auth,provider} from '../firebase-config.js';
import {signInWithPopup} from 'firebase/auth';
import Cookies from 'universal-cookie';

// when ever we want to use this cookie we will create a variable
const cookies = new Cookies()

export const Auth = (props) => {

    const {setIsAuth} = props

    const signInWithGoogle = async () =>{
        // as we use async await we will also use try and catch for errors
        try{
        const result = await signInWithPopup(auth, provider);
        // we want to keep the used logged in into the acc even if they refresh the page we will create the cookie 
        cookies.set("auth-token", result.user.refreshToken)
        setIsAuth(true);
        }
        catch(err){
            console.log(err);
        }
    };

    return <div className="auth">
        <p>Sign in with google to Continue</p>
        <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
}