import React from 'react';
import './Home.css';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {

   const auth = getAuth(app);
   const [user] = useAuthState(auth);

   return (
      <div>
         <h2>This is Home</h2>
         <p>Current user is: {user ? user.displayName : 'No Body'}</p>
      </div>
   );
};

export default Home;