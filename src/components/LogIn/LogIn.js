import React from 'react';
import './LogIn.css';

const LogIn = () => {
   return (
      <div>
         <h1>Please Login Here!!</h1>
         <div>
            <button> Google Sign-In </button>
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