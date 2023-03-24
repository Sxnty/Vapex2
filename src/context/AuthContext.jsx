import React, { createContext, useState, useEffect } from "react";
import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

const loginWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider);
};
import { auth } from "../firebase";

const logOut = async () => {
  await signOut(auth);
};

export const AuthProvider = ({ children }) => {
  const [userLoged, setUserLoged] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoged(user);
      } else {
        setUserLoged(null);
      }
      setUserLoading(false)
    });
  }, []);

  return (
    <AuthContext.Provider value={{ loginWithGoogle, userLoged, logOut, userLoading, setUserLoading }}>
      {children}
    </AuthContext.Provider>
  );
};