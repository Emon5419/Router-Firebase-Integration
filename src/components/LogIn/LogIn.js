import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './LogIn.css';

const LogIn = () => {
   const auth = getAuth(app)
   const [signInWithGoogle] = useSignInWithGoogle(auth)
   return (
      <div>
         <h1>Please Login Here!!</h1>
         <div>
            <button onClick={() => signInWithGoogle()}> Google Sign-In </button>
            <br />
         </div>
         <form className='form-contanier'>
            <input type="email" placeholder='Your Email' name="" id="" />
            <br />
            <input type="password" placeholder='Your Password' />
            <br />
            <input type="submit" value='Login' />
         </form>
      </div>
   );
};

export default LogIn;