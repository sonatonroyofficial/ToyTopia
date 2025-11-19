import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create a user functionality
  const createUser = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  /* login functionality start */
  const loginFunction = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  /* login functionality end */

  /* SignIn with Google Functionality start */
  const signInWithGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  /* SignIn with Google Functionality end */


  /* Sign Out Functionality start */
  const signOutFunction = () => {
    setLoading(true);
    return signOut(auth)
  }
  /* Sign Out Functionality end */

  /* password reset send in  Email start */
  const resetPasswordFunction = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  /* password reset send in  Email end */

  /* update profile functionality start */
  const updateProfileFunction = (name, photoURL) => {
    if(!auth.currentUser) {
      return
    }

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
  }
  /* update profile functionality end */


  /* get Current User functionality start */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("in the auth", currentUser), 
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  /* get Current User functionality end */

  const authInfo = {
    user,
    loading,
    createUser: createUser,
    signInWithGoogle: signInWithGoogle,
    signOutFunction: signOutFunction,
    loginFunction: loginFunction,
    resetPasswordFunction: resetPasswordFunction,
    updateProfileFunction: updateProfileFunction
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
