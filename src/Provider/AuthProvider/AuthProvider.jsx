import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const signUp = (name, photo, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    const logOut = () => {
        setLoading(true)
        return (signOut(auth)
            .then(() => {
                toast.success('SignOut successfully.');
                setUser(null);
            })
            .catch(error => {
                console.log(error.message)
            }))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            if (currentUser) {
                setUser(currentUser);
            }
        })
        return () => {
            unSubscribe();
        }

    }, [])
    const authInfo = {
        user,

        loading,
        setUser,
        signUp,
        logOut,
        logIn,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            <ToastContainer></ToastContainer>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;