import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';



const Login = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result)=>{
            const gUser= result.user;
            setUser(gUser);
            console.log(gUser);
        })
       .catch((error)=>{
        const errorMessage = error.message;
        console.log(errorMessage);
       })
        
    }
   
    return (
        <div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()}>Google signIn </button>
                <div>
                    {user.displayName}
                    {user.email}
                </div>
                

            </div>
        </div>
    );
};

export default Login;