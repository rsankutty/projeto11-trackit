import React from "react";
import { useContext,useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const [userToken,setUserToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQwMCwiaWF0IjoxNjcxNDY1MTg0fQ.ndiEWOvXr7aM_YHCR555G2fYPNV-WiO4QKsrbxUx_fo");

    return (
        <AuthContext.Provider value={{userToken,setUserToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

//hook personalizado
export const useAuth = () => useContext(AuthContext)