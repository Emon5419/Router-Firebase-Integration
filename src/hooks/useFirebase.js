import { useEffect, useState } from "react"

const useFirebase = () => {
   const [user, setUser] = useState({});
   useEffect(() => {

   }, []);
   const signinwithGoogle = () => {
      console.log('Sign In Soon');
   }
   return [user, setUser];
}
export default useFirebase;