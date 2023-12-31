import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();


  const emailRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider);
  }

  const logOut  =() =>{
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  });

  const authInfo = { emailRegister, user, logIn, logOut, loading, googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
