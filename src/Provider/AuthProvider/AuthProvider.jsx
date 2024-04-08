import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config.init";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const signUp = (name, photo, email, password) => {
        setLoading(true);
        return (
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photo
                    })
                        
                    setUser(result.user)
                    console.log(result.user)
                })
                .catch(error => {
                    console.log(error.message)
                })
        )
    }
    const logIn = (email, password) => {
        setLoading(true)
        return (
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    setUser(result.user)
                    alert('logIn Successfully')
                })
        )
    }
    const logOut = () => {
        setLoading(true)
        return (signOut(auth)
            .then(() => {
                alert('Sign out done.');
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
                console.log('yoo bro ok ', currentUser);
            }
        })
        return () => {
            unSubscribe();
        }

    }, [])
    const authInfo = {
        user,
        error,
        loading,
        setError,
        signUp,
        logOut,
        logIn,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;