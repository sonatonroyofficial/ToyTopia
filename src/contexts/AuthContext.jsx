import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase/config';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up with email and password
  const signup = async (email, password, displayName, photoURL) => {
    if (!auth) {
      toast.error('Firebase not configured. Please set up your environment variables.');
      throw new Error('Firebase not configured');
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, {
        displayName: displayName,
        photoURL: photoURL || null
      });
      toast.success('Account created successfully!');
      return result;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Sign in with email and password
  const login = async (email, password) => {
    if (!auth) {
      toast.error('Firebase not configured. Please set up your environment variables.');
      throw new Error('Firebase not configured');
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Welcome back!');
      return result;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Sign in with Google
  const loginWithGoogle = async () => {
    if (!auth) {
      toast.error('Firebase not configured. Please set up your environment variables.');
      throw new Error('Firebase not configured');
    }
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      toast.success('Welcome!');
      return result;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Sign out
  const logout = async () => {
    if (!auth) {
      toast.error('Firebase not configured. Please set up your environment variables.');
      throw new Error('Firebase not configured');
    }
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    if (!auth) {
      toast.error('Firebase not configured. Please set up your environment variables.');
      throw new Error('Firebase not configured');
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Update user profile
  const updateUserProfile = async (displayName, photoURL) => {
    if (!auth) {
      toast.error('Firebase not configured. Please set up your environment variables.');
      throw new Error('Firebase not configured');
    }
    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL
      });
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loginWithGoogle,
    resetPassword,
    updateUserProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
