import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}


export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(localStorage.getItem("authUser")? JSON.parse(localStorage.getItem("authUser")) : null);
    return <AuthContext.Provider 
      value={{
        authUser,
        setAuthUser
      }}
      >
     {children}
    </AuthContext.Provider>;
}

kuytfjgkhlj;kljjgfdsfdasdfhkl