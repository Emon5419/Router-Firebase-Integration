import React from 'react';
import './Register.css';

const Register = () => {
   return (
      <div>
         <h1>Please Register Now</h1>
         <form className='form-contanier'>
            <input type="text" placeholder='Your Name' />
            <br />
            <input type="email" placeholder='Your Email' name="" id="" />
            <br />
            <input type="password" placeholder='Your Password' />
            <br />
            <input type="submit" value='Register' />
         </form>
      </div>
   );
};

export default Register;