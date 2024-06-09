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

  // Create User
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  // Sign In
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }  

  // Sign Out 
  const logOut = () =>{
    return signOut(auth);
  }

  // 
  useEffect(() => {
    const unSubscibe = onAuthStateChanged(auth, currentUser => {
      console.log('User in the auth state change', currentUser);
      setUser(currentUser);
    })
    return () => {
      unSubscibe();
    }
  }, [])

  const authInfo = {
    user,
    signUp,
    signIn,
    logOut

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