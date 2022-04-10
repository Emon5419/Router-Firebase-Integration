import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const HEader = () => {
   return (
      <div className='header'>
         <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>LogIn</Link>
         </nav>
      </div>
   );
};

export default HEader;