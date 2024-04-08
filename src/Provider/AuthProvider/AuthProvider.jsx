import { createContext, useState } from "react";
import PropTypes from 'prop-types';
const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const authInfo = {
        user,
        setUser,
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