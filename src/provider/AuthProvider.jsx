import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  createContext,
  useEffect,
  useState
} from "react";
import app from "../firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  

  // Create User
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Sign In
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Sign Out 
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  // 
  useEffect(() => {
    const unSubscibe = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscibe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    signUp,
    signIn,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};


export default AuthProvider;