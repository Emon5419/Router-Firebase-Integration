import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.init';



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
   const [user, setUser] = useState({});

   const signinwithGoogle = () => {
      signInWithPopup(auth, googleProvider)
         .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
         })
   }
   const handleSignOut = () => {
      signOut(auth)
         .then(() => {
            // Sign-out successful.
         })
         .catch((error) => {
            // An error happened.
         });

   }

   useEffect(() => {
      onAuthStateChanged(auth, user => {
         setUser(user)
      })
   }, []);

   // return [user, setUser];
   return {
      user,
      setUser,
      signinwithGoogle,
      handleSignOut
   }
}
export default useFirebase;