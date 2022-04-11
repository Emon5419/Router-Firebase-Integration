import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const Products = () => {
   const auth = getAuth(app);
   const [user] = useAuthState(auth); return (
      <div>
         <h2>Knok Knok Who's There </h2>
         <h5>{user ? user.displayName : 'Bhoot Aaaya'}</h5>
      </div>
   );
};

export default Products;