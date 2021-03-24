import { React, createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState([]); //<object | null>(null);
    const [token, setToken] = useState([]);

    function Login(props){
        setUser(props.user);
        setToken(props.token);
    }
    return(
        <AuthContext.Provider value={{ signed: Boolean(user), user, token, Login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;