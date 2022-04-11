import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const HEader = () => {
   const { user, handleSignOut } = useFirebase();
   return (
      <div className='header'>
         <nav>
            <Link to='/'>Home</Link>
            <Link to='/produts'>Products</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/register'>Register</Link>
            <span> {user?.displayName && user.displayName} </span>
            {
               user?.uid
                  ?
                  <button onClick={handleSignOut}>Sign Out</button>
                  :
                  <Link to='/login'>LogIn</Link>
            }
         </nav>
      </div>
   );
};

export default HEader;